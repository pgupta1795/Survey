const multer = require('multer');
const path = require('path');

const imageName = `technia-image-${Date.now()}`;

const storage = multer.diskStorage({
  destination: process.env.IMAGE_PATH,
  filename(req, file, cb) {
    cb(null, imageName + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
const uploadSingleFile = upload.single('myfile');

module.exports = uploadSingleFile;
