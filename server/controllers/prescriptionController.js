import prescriptionModel from '../models/prescriptionModel.js';
import patientModel from '../models/patientModel.js';

export const createPrescriptionController = async (req, res) => {
    try {
        const { patientId, prescriptionDetails, status } = req.body;
        const doctorId = req.params.id;

        const newPrescription = new prescriptionModel({
            patient: patientId,
            doctor: doctorId,
            prescriptionDetails,
            status
        });

        const savedPrescription = await newPrescription.save();

        // Update the patient's prescriptions array
        await patientModel.findByIdAndUpdate(
            patientId,
            { $push: { prescriptions: savedPrescription._id } },
            { new: true }
        );

        res.status(201).json({
            success: true,
            message: 'Prescription created successfully',
            savedPrescription
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Creating Prescription',
            error
        });
    }
}
