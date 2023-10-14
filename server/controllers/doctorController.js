import doctorModel from '../models/doctorModel.js';
import userModel from '../models/userModel.js';
import patientModel from '../models/patientModel.js';
import prescriptionModel from '../models/prescriptionModel.js';

export const getAllDoctorController = async (req, res) => {
    try {
        const doctors = await doctorModel.find();
        res.status(200).json({
            success: true,
            message: 'All doctors retrieved successfully',
            doctors
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while retriving all doctors details",
            error
        })
    }
}

export const updateDoctorInfoController = async (req, res) => {
    try {
        const { name, email, phone, specialization, licenseNumber, clinicAddress, consultingHours, consultingFee, education, experience } = req.body;
        const doctorId = req.params.id;

        const updatedDoctor = await doctorModel.findOneAndUpdate(
            { _id: doctorId },
            {
                name,
                phone,
                specialization,
                licenseNumber,
                clinicAddress,
                consultingHours,
                consultingFee,
                education,
                experience
            },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            })
        }

        const updatedUser = await userModel.findOneAndUpdate(
            { email: email },
            {
                name
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Doctor and User information updated successfully',
            updatedDoctor,
            updatedUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Updating Doctor Info",
            error
        })

    }

}

export const uploadPhotoController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Please upload a photo'
            })
        }

        const doctorId = req.params.id;
        const photoPath = req.file.path;

        const updatedDoctor = await doctorModel.findByIdAndUpdate(
            doctorId,
            { profilePhoto: photoPath },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            })
        }

        res.status(201).json({
            success: true,
            message: 'Photo uploaded and path saved in MongoDB Atlas',
            updatedDoctor,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Uploading Photo",
            error
        })
    }
}