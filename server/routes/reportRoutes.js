import express from 'express'
import {
    getAllReportController,
    getReportByPatientIdController,
    getReportByDateController,
    createReportController,
    deleteReportController
} from '../controllers/reportController.js'
import uploadReports from '../middlewares/uploadReports.js';
const router = express.Router()


//routing
// get all report || Method GET
router.get('/all-report',getAllReportController);

// get report by patient id || Method GET
router.get('/report-by-patient/:id',getReportByPatientIdController);

//get report in a time range || Method GET
router.get('/report-by-date',getReportByDateController);

// create report || Method POST
router.post('/create-report',uploadReports.single('report'),createReportController);

// delete report || Method DELETE
router.delete('/delete-report/:id',deleteReportController);

export default router;