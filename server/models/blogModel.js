import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type:String,
        required: true,
        trim: true,
    },
    blogPhoto: {
        type: String,
    },
    tags: {
        type: [String]
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    upVote: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    },
    downVote: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema, "Blogs");
export default Blog;
