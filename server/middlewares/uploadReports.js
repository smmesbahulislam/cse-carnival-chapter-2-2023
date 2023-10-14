import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/reports');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const uploadReports = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const allowedMimeTypes = ['application/pdf'];

        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            console.log('Only pdf files are allowed!');
            cb(null, false); // Reject the file
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
});

export default uploadReports;