import express from 'express';
import { createPrescriptionController } from '../controllers/prescriptionController.js';
const router = express.Router();

//routing
//create prescription || method post
router.post('/create-prescription/:id',createPrescriptionController);

export default router;