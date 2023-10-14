import blogModel from '../models/blogModel.js';
import userModel from '../models/userModel.js';
import doctorModel from '../models/doctorModel.js';
import patientModel from '../models/patientModel.js';
import prescriptionModel from '../models/prescriptionModel.js';
import fs from 'fs';

export const getAllBlogController = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json({
            success: true,
            message: 'All blogs retrieved successfully',
            blogs
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while fatching blogs",
            error
        })
    }
}

export const getBlogByDoctorIdController = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const blogs = await blogModel.find({ doctorId: doctorId });

        if (!blogs) {
            return res.status(404).json({
                success: false,
                message: 'No blogs found for the specified doctor',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Blogs fetched successfully by doctor ID',
            blogs,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while fetching blog by doctor id",
            error
        })
    }
}

export const createBlogController = async (req, res) => {
    try {
        const { title, description, doctorId, tags } = req.body;
        const blogPhoto = req.file.path;

        const blog = await blogModel.create({
            title,
            description,
            blogPhoto,
            doctorId,
            tags
        });

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not created'
            })
        }
        res.status(201).json({
            success: true,
            message: 'Blog created successfully',
            blog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while creating blog",
            error
        })
    }
}

export const updateBlogController = async (req, res) => {
    try {
        const { title, description, tags } = req.body;
        const blogId = req.params.id;
        const newBlogPhoto = req.file.path; // New blog photo

        // Fetch the current blog to check if it has a photo
        const currentBlog = await blogModel.findById(blogId);

        // If the current blog has a photo, delete the current photo
        if (currentBlog.blogPhoto) {
            const currentPhotoPath = currentBlog.blogPhoto;

            // Delete the current blog photo
            fs.unlink(currentPhotoPath, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${err}`);
                } else {
                    console.log('Current photo deleted successfully');
                }
            });
        }

        // Update the blog, including the new blog photo and other details
        const updatedBlog = await blogModel.findByIdAndUpdate(
            { _id: blogId },
            {
                title,
                description,
                blogPhoto: newBlogPhoto, // Upload the new blog photo
                tags
            },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            updatedBlog
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while updating blog',
            error
        });
    }
};


export const deleteBlogController = async (req, res) => {
    try {
        const blogId = req.params.id;
        const deletedBlog = await blogModel.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found, or it was already deleted.',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully',
            deletedBlog,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while deleting blog",
            error
        })
    }
}

export const upvoteBlogController = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { patientId } = req.body;

        // Use Mongoose to find the blog by its ID
        const blog = await blogModel.findById(blogId);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }

        // Check if the patientId is already in the upVote array
        const upVoteIndex = blog.upVote.indexOf(patientId);

        if (upVoteIndex !== -1) {
            // Case 1: If the patient is already in the upVote array, remove them
            blog.upVote.splice(upVoteIndex, 1);
        } else {
            // Case 2: If the patient is not in the upVote array, add them
            blog.upVote.push(patientId);

            // Case 3: If the patient is in the downVote array, remove them
            const downVoteIndex = blog.downVote.indexOf(patientId);
            if (downVoteIndex !== -1) {
                blog.downVote.splice(downVoteIndex, 1);
            }
        }

        // Save the updated blog
        await blog.save();

        res.status(200).json({
            success: true,
            message: 'Blog upvoted successfully',
            blog,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while upvoting blog',
            error,
        });
    }
};

export const downvoteBlogController = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { patientId } = req.body;

        // Use Mongoose to find the blog by its ID
        const blog = await blogModel.findById(blogId);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }

        // Check if the patientId is already in the downVote array
        const downVoteIndex = blog.downVote.indexOf(patientId);

        if (downVoteIndex !== -1) {
            // Case 1: If the patient is already in the downVote array, remove them
            blog.downVote.splice(downVoteIndex, 1);
        } else {
            // Case 2: If the patient is not in the downVote array, add them
            blog.downVote.push(patientId);

            // Case 3: If the patient is in the upVote array, remove them
            const upVoteIndex = blog.upVote.indexOf(patientId);
            if (upVoteIndex !== -1) {
                blog.upVote.splice(upVoteIndex, 1);
            }
        }

        // Save the updated blog
        await blog.save();

        res.status(200).json({
            success: true,
            message: 'Blog downvoted successfully',
            blog,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while downvoting blog",
            error
        });
    }
};