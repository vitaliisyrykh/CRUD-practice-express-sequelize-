const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const { checkHero } = require('../middlewares/checkHero.mw');
const imgsController = require('../controllers/imgsHero.controller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/img'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage });

const imgsRouter = Router({
  mergeParams: true,
});

imgsRouter.post(
  '/',
  checkHero,
  upload.single('heroImg'),
  imgsController.addImgs
);
imgsRouter.get('/', checkHero, imgsController.getAllImgs);
imgsRouter.delete('/:idImg', checkHero, imgsController.deleteImg);

module.exports = imgsRouter;
