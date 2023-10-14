import blogModel from '../models/blogModel.js';
import userModel from '../models/userModel.js';
import doctorModel from '../models/doctorModel.js';
import patientModel from '../models/patientModel.js';
import prescriptionModel from '../models/prescriptionModel.js';
import reportModel from '../models/reportModel.js';

import fs from 'fs';


export const getAllReportController = async(req, res) => {
    try {
        const reports = await reportModel.find();
        res.status(200).json({
            success: true,
            message: 'All reports retrieved successfully',
            reports
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while fetching all report",
            error
        })
    }
}

export const getReportByPatientIdController = async(req, res) => {
    try {
        const reports = await reportModel.find({ patientId: req.params.id });
        res.status(200).json({
            success: true,
            message: 'All reports of a patient retrieved successfully',
            reports
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while fetching report by patient id",
            error
        })
    }
}

export const getReportByDateController = async(req, res) => {
    try {
        const { startDate, endDate } = req.body;
        const reports = await reportModel.find({ testDate: { $gte: startDate, $lte: endDate } });
        res.status(200).json({
            success: true,
            message: 'All reports of a patient retrieved successfully',
            reports
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while fetching report by date",
            error
        })
    }
}

export const createReportController = async(req, res) => {
    try {
        const { testDate, patientId } = req.body;
        const reportPdf = req.file.path;

        const report = await reportModel.create({
            testDate,
            reportPdf,
            patientId
        });

        res.status(200).json({
            success: true,
            message: 'Report created successfully',
            report
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while creating report",
            error
        })
    }
}

export const deleteReportController = async(req, res) => {
    try {
        const reportId = req.params.id;
        const report = await reportModel.findByIdAndDelete(reportId);
        const reportPdf = report.reportPdf;
        fs.unlinkSync(reportPdf);

        res.status(200).json({
            success: true,
            message: 'Report deleted successfully',
            report
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while deleting report",
            error
        })
    }
}