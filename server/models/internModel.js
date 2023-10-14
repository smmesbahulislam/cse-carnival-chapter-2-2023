import mongoose from 'mongoose';

const internSchema = new mongoose.Schema({
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
    address: {
        type: String,
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true,
    },
    education: {
        type: [String],
    },
    supervisingDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    profilePhoto: {
        type: String,
    },
    specialization: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Intern = mongoose.model('Intern', internSchema, "Interns");
export default Intern;