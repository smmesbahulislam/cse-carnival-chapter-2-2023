import doctorModel from '../models/doctorModel.js';
import internModel from '../models/internModel.js';
import userModel from '../models/userModel.js'

export const getAllInternController = async (req, res) => {
    try {
        const interns = await internModel.find();
        res.status(200).json({
            success: true,
            message: 'All interns retrieved successfully',
            interns
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while retriving all interns details",
            error
        })
    }

}

export const updateInternInfoController = async (req, res) => {
    try {
        const {name, email, phone, address, licenseNumber, education, specialization} = req.body;
        const internId = req.params.id;

        const updatedIntern = await internModel.findOneAndUpdate(
            {_id: internId},
            {
                name,
                phone,
                address,
                licenseNumber,
                education,
                specialization
            },
            {new: true}
        )

        if(!updatedIntern) {
            return res.status(404).json({
                success: false,
                message: 'Intern not found'
            })
        }

        const updatedUser = await userModel.findOneAndUpdate(
            {email: email},
            {
                name
            },
            {new: true}
        )

        if(!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Intern and User information updated successfully',
            updatedIntern,
            updatedUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while updating interns details",
            error
        }) 
    }

}

export const uploadPhotoController = async(req, res) => {
    try {
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: 'Please upload a photo'
            })
        }

        const internId = req.params.id;
        const photoPath = req.file.path;

        const updatedIntern = await internModel.findOneAndUpdate(
            {_id: internId},
            {
                profilePhoto: photoPath
            },
            {new: true}
        )

        if(!updatedIntern) {
            return res.status(404).json({
                success: false,
                message: 'Intern not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Intern photo uploaded successfully',
            updatedIntern
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while uploading interns photo",
            error
        })
    }
}