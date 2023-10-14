import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    chatName: {
        type: String,
        trim: true,
    },
    isGroupChat: {
        type: Boolean,
        default: false,
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
        },
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Intern',
    },
    supervisingDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
}, {timestamps: true});

const Chat = mongoose.model('Chat', chatSchema, 'Chats');
export default Chat;