const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'daebdbo1y',
  api_key: '542488626844325',
  api_secret: 'DfLbwOmkk9VEt-UWWKONYN5IYlo'
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }]
});

const parser = multer({ storage: storage });

module.exports = parser;
