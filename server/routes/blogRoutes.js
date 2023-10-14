import express from 'express';
import { 
    getAllBlogController, 
    getBlogByDoctorIdController, 
    createBlogController ,
    updateBlogController,
    deleteBlogController,
    upvoteBlogController,
    downvoteBlogController
} from '../controllers/blogController.js';
import uploadPhoto from '../middlewares/uploadPhoto.js';

const router  = express.Router();

//routing
// get all blog || Method GET
router.get('/all-blog',getAllBlogController);

// get blog by doctor Id || Method GET
router.get('/blog-by-doctor/:id',getBlogByDoctorIdController);

// create blog || Method POST
router.post('/create-blog',uploadPhoto.single('photo'),createBlogController);

// update blog || Method PUT
router.put('/update-blog/:id',uploadPhoto.single('photo'),updateBlogController);

//delete blog || Method DELETE
router.delete('/delete-blog/:id',deleteBlogController);

//upvode blog || Method PUT
router.put('/upvote-blog/:id',upvoteBlogController);

//downvote blog || Method PUT
router.put('/downvote-blog/:id',downvoteBlogController);


export default router;