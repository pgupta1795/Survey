const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: process.env.IMAGE_PATH,
  filename: (req, file, cb) => {
    cb(null, `technia-image-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });
const uploadSingleFile = upload.single('myfile');

module.exports = uploadSingleFile;
