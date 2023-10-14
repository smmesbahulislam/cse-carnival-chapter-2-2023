import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelpers.js";

export const registerController = async( req, res) => {
    try {
        const {name,email,password,phone,secretKey} = req.body;
        //validation
        if(!name){
            return res.send({message:"Name is Required"});
        }
        if(!email){
            return res.send({message:"Email is Required"});
        }
        if(!password){
            return res.send({message:"password is Required"});
        }
        if(!phone){
            return res.send({message:"phone is Required"});
        }
        if(!secretKey){
            return res.send({message:"secretKey is Required"});
        }
        //check user
        const existingUser = await userModel.findOne({email});
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already Register please login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save user
        const user = await new userModel({name,email,phone,password:hashedPassword,secretKey}).save();
        res.status(201).send({
            success:true,
            message: 'User Register Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Registration",
            error
        })
    }
}