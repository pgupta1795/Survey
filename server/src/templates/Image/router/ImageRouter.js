const router = require('express').Router();
const uploadSingleFile = require('./middleware');
const { getImage, postImage } = require('../service/ImageService');

router.route('/').get(getImage);
router.route('/').post(uploadSingleFile, postImage);

module.exports = router;
