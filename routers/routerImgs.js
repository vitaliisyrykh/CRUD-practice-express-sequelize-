const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const imgsController = require('../controllers/imgsHero.controller')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/img'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage });

const imgsRouter = Router();

imgsRouter.post('/',upload.array('heroImg'), imgsController.addImgs);

module.exports = imgsRouter;