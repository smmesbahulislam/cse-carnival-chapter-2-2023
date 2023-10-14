import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profiles');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const uploadPhoto = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
  
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        console.log('Only png, jpg, and jpeg files are allowed!');
        cb(null, false); // Reject the file
      }
    },
    limits: {
      fileSize: 1024 * 1024 * 2,
    },
  });
  

export default uploadPhoto;
