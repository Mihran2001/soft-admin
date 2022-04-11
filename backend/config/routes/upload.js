const express = require('express');
const router = express.Router();
const { upload, uploadCvForm } = require('../../app/services/upload');
const { saveImage,getImage } = require('../../app/services/images');

router.post('/cv', upload);
router.post('/form-cv', uploadCvForm);

router.post('/image', saveImage);
router.get('/image', getImage);


module.exports = router;
