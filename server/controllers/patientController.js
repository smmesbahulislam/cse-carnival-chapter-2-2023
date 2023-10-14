import patientModel from '../models/patientModel.js';
import userModel from '../models/userModel.js';

export const getAllPatientController = async (req, res) => {
    try {
        const patients = await patientModel.find(); // Retrieve all patients from your database

        res.status(200).json({
            success: true,
            message: 'All patients retrieved successfully',
            patients,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in getting all patients',
            error: error.message, // You can include the error message for debugging
        });
    }
}

export const updatePatientInfoController = async (req, res) => {
    try {
        const { name, email, dateOfBirth, gender, phone, address } = req.body;
        const patientId = req.params.id;

        const updatedPatient = await patientModel.findOneAndUpdate(
            { _id: patientId },
            {
                name,
                dateOfBirth,
                gender,
                phone,
                address,
            },
            { new: true } // This option returns the updated document.
        );

        if (!updatedPatient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found',
            });
        }

        const updatedUser = await userModel.findOneAndUpdate(
            { email: email },
            {
                name, // Assuming you want to update the 'name' field in the user model
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Patient and User information updated successfully',
            updatedPatient,
            updatedUser,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Updating Patient Info",
            error
        })
    }
}

export const uploadPhotoController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No photo uploaded' });
        }

        // Get the uploaded file path
        const photoPath = req.file.path;

        // Assuming you have a patientId in the request parameters
        const patientId = req.params.id;

        // Update the patient document in MongoDB with the photo path
        const updatedPatient = await patientModel.findByIdAndUpdate(
            patientId,
            { photo: photoPath }, // Set the 'photo' field to the photo path
            { new: true } // This option returns the updated document
        );

        if (!updatedPatient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }

        res.status(201).json({
            success: true,
            message: 'Photo uploaded and path saved in MongoDB Atlas',
            updatedPatient,
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

export const updatePermissionOfSharingInfoController = async (req, res) => {
    try {
        const { permissionOfSharingInfo } = req.body;
        const patientId = req.params.id;

        const updatedPatient = await patientModel.findOneAndUpdate(
            { _id: patientId },
            {
                permissionOfSharingInfo
            },
            { new: true } // This option returns the updated document.
        );

        if (!updatedPatient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }

        res.status(201).json({
            success: true,
            message: 'Permission of Sharing updated.',
            updatedPatient,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Updating Permission of Sharing Info",
            error
        })
        
    }

}

