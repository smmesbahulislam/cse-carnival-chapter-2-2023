import express from 'express';
import {
    updatePatientInfoController,
    uploadPhotoController,
    updatePermissionOfSharingInfoController,
    getAllPatientController
} from '../controllers/patientController.js';
import uploadPhoto from '../middlewares/uploadPhoto.js';

const router = express.Router();

//routing
//get all patient || Method GET
router.get('/all-patient', getAllPatientController);

//patient info update || Method PUT
router.put('/update-patient-info/:id', updatePatientInfoController);

// upload photo of patient || Method POST
router.post('/upload-photo/:id', uploadPhoto.single('photo'), uploadPhotoController);

//update permission of sharing info || Method PUT
router.put('/update-permission-of-sharing-info/:id', updatePermissionOfSharingInfoController);


export default router;