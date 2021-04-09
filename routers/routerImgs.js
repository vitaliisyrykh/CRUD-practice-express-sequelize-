const { Router } = require('express');
const uploadImgs = require('../middlewares/uploadImgs')
const { checkHero } = require('../middlewares/checkHero.mw');
const imgsController = require('../controllers/imgsHero.controller');


const imgsRouter = Router({
  mergeParams: true,
});

imgsRouter.post(
  '/',
  checkHero,
  uploadImgs,
  imgsController.addImgs
);
imgsRouter.get('/', checkHero, imgsController.getAllImgs);
imgsRouter.delete('/:idImg', checkHero, imgsController.deleteImg);

module.exports = imgsRouter;
