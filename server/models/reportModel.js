import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    testDate: {
        type: String,
        required: true,
    },
    reportPdf: {
        type: String,
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    },
}, {timestamps: true});

const Report = mongoose.model('Report', reportSchema, "Reports");
export default Report;