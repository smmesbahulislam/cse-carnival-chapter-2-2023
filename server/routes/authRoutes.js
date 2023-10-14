import express from 'express';
import { registerController, loginController, forgotPasswordController } from '../controllers/authController.js';


const router = express.Router();

//routing
//Register || Method POST
router.post('/register',registerController);

//Login || POST
router.post('/login',loginController);

//Forgot password || POST
router.post('/forgot-password',forgotPasswordController)


export default router;