import express from 'express';
import { getAllInternController, updateInternInfoController, uploadPhotoController } from '../controllers/internController.js';
import uploadPhoto from '../middlewares/uploadPhoto.js';

const router = express.Router();

//routing
//get all doctor || Method GET
router.get('/all-intern', getAllInternController);

//update intern info || Method PUT
router.put('/update-intern-info/:id', updateInternInfoController);

// upload photo of intern || Method POST
router.post('/upload-photo/:id', uploadPhoto.single('photo'), uploadPhotoController);


export default router;