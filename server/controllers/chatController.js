import chatModel from '../models/chatModel.js';
import userModel from '../models/userModel.js';
import internModel from '../models/internModel.js';

export const accessChatController = async (req, res) => {
    try {
        // const { userId } = req.body;
        const { senderId, receiverId } = req.body;
        if (!senderId) {
            console.log("UserId param not sent with request");
            return res.status(400).send({
                success: false,
                message: "UserId param not sent with request"
            })
        }

        var isChat = await chatModel.find({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: receiverId } } },
                { users: { $elemMatch: { $eq: senderId } } },
            ]
        }).populate("users", "-password")
            .populate("latestMessage");

        isChat = await userModel.populate(isChat, {
            path: "latestMessage.sender",
            select: "name email"
        });


        if (isChat.length > 0) {
            res.send(isChat[0]);
        } else {
            var chatData = {
                chatName: 'sender',
                isGroupChat: false,
                users: [receiverId, senderId],
            }
        }

        const createdChat = await chatModel.create(chatData);
        const FullChat = await chatModel.findOne({
            _id: createdChat._id
        }).populate("users", "-password")
        // .populate("latestMessage");

        res.status(200).send({
            success: true,
            message: "Chat created successfully",
            chat: FullChat
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Accessing Chat",
            error
        })
    }
}

export const fetchChatController = async (req, res) => {
    try {
        const { id } = req.params;
        chatModel.find({
            users: { $elemMatch: { $eq: id } }
        })
            .populate("users", "-password -secretKey")
            .populate("latestMessage")
            .populate("groupAdmin", "-password -secretKey")
            .sort({ updatedAt: -1 })
            .then(async (results) => {
                results = await userModel.populate(results, {
                    path: "latestMessage.sender",
                    select: 'name email',
                });
                res.status(200).send({
                    success: true,
                    message: "Chat fetched successfully",
                    chats: results
                })
            })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Fetching Chat",
            error
        })
    }

}

export const createGroupChatController = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        // Find the supervising doctor of the receiver
        const supervisingDoctor = await internModel.findById(receiverId).select('supervisingDoctor');
        if (!supervisingDoctor) {
            return res.status(404).send({
                success: false,
                message: "supervisingDoctor not found"
            });
        }
        // console.log(supervisingDoctor.supervisingDoctor)

        const chatUsers = [receiverId, supervisingDoctor, senderId];
        // console.log(chatUsers)

        const groudChat = await chatModel.create({
            chatName: 'Patient Group Chat',
            isGroupChat: true,
            users: chatUsers,
            groupAdmin: receiverId,
            supervisingDoctor: supervisingDoctor.supervisingDoctor
        })

        const fullGroupChat = await chatModel.findOne({
            _id: groudChat._id
        })
            .populate("users", "-password -secretKey")
            .populate('groupAdmin', '-password -secretKey')
            .populate('supervisingDoctor', '-password -secretKey')

        res.status(200).send({
            success: true,
            message: "Group Chat created successfully",
            chat: fullGroupChat
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Creating Group Chat",
            error
        })
    }
}

export const renameGroupChatController = async (req, res) => {
    try {
        const { chatId, chatName } = req.body;

        const updatedChat = await chatModel.findOneAndUpdate(
            { _id: chatId },
            { chatName },
            { new: true }
        ).populate("users", "-password -secretKey")
            .populate("groupAdmin", "-password -secretKey")

        if (!updatedChat) {
            return res.status(404).send({
                success: false,
                message: "Chat not found"
            })
        }
        else {
            res.status(200).send({
                success: true,
                message: "Chat renamed successfully",
                chat: updatedChat
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Renaming Group Chat",
            error
        })
    }
}