import express from 'express'
import { updateDoctorInfoController, uploadPhotoController, getAllDoctorController } from '../controllers/doctorController.js';
import uploadPhoto from '../middlewares/uploadPhoto.js';
const router = express.Router();

//routing

//get all doctor || Method GET
router.get('/all-doctor', getAllDoctorController);
//doctor info update || Method PUT
router.put('/update-doctor-info/:id', updateDoctorInfoController);

// doctor photo update || Method POST
router.post('/upload-photo/:id', uploadPhoto.single('photo'), uploadPhotoController);

export default router;