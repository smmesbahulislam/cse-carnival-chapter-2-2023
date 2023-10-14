import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
    },
    secretKey: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
        enum: [1, 2, 3], // 1: user, 2: intern, 3: doctor
    }
},{timestamps: true});

export default mongoose.model("users", userSchema);