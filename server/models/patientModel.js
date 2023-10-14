import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    photo: {
        type: String,
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report', // Replace 'Report' with the actual name of your report schema
        }
    ],
    prescriptions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Prescription', // Replace 'Prescription' with the actual name of your prescription schema
        }
    ],
    permissionOfSharingInfo: {
        type: Boolean,
    },
    consultentDoctors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor', // Replace 'Doctor' with the actual name of your doctor schema
        }
    ],
    consultentInterns: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Intern', // Replace 'Intern' with the actual name of your intern schema
        }
    ],
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema, "Patients");

export default Patient;
