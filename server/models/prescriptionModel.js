import mongoose from 'mongoose';
import { format } from 'date-fns';

const prescriptionSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient', // Reference to the Patient model
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor', // Reference to the Doctor model
        required: true,
    },
    prescriptionDetails: {
        type: String, // Store the prescription details as text
        required: true,
    },
    prescriptionDate: {
        type: Date,
        default: Date.now,
        get: (val) => format(val, 'dd MMM yyyy'), // Format the date when getting it
    },
    status: {
        type: String,
        enum: ['active', 'expired', 'fulfilled'],
        default: 'active',
    },
}, { timestamps: true });


const Prescription = mongoose.model('Prescription', prescriptionSchema, "Prescriptions");

export default Prescription;
