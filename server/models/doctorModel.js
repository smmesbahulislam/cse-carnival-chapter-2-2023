import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
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
    specialization: {
        type: String,
        required: true,
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true,
    },
    clinicAddress: {
        type: String,
    },
    profilePhoto: {
        type: String,
    },
    consultingHours: {
        type: String,
    },
    consultingFee: {
        type: Number,
    },
    education: {
        type: [String],
    },
    experience: {
        type: Number,
    },
    patients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient', // Replace 'Patient' with the actual name of your patient schema
        }
    ],
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment', // Replace 'Appointment' with the actual name of your appointment schema
        }
    ],
    // reviews: [
    //     {
    //         patient: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'Patient', // Reference to the patient who left the review
    //         },
    //         rating: {
    //             type: Number,
    //             required: true,
    //         },
    //         reviewText: {
    //             type: String,
    //         },
    //     }
    // ],
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema, 'Doctors');

export default Doctor;
