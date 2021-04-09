const { Images } = require('../models');
const createError = require('http-errors');

module.exports.addImgs = async (req, res, next) => {
  try {
    const {
      heroInstance,
      file: { filename },
    } = req;

    const addedImg = await heroInstance.createImage(
      { path: filename },
      { returning: true }
    );
    if (!addedImg) {
      return next(createError(400, 'Image can`t uploud '));
    }
    res.status(200).send(addedImg);
  } catch (err) {
    next(err);
  }
};

module.exports.updateImg = async (req, res, next) => {
  try {
    const {
      file: { filename },
      params: { idImg },
    } = req;
    const [rowsCount, [updatedImg]] = await Images.update(
      { path: filename },
      {
        where: { id: +idImg },
        returning: true,
      }
    );

    if (rowsCount !== 1) {
      return next(createError(400, 'Image can`t update'));
    }
    res.status(201).send(updatedImg);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllImgs = async (req, res, next) => {
  try {
    const { heroInstance } = req;
    const img = await heroInstance.getImages({ returning: true });
    if (!img) {
      return next(createError(404, 'Images not found'));
    }
    res.status(200).send(img);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteImg = async (req, res, next) => {
  try {
    const {
      params: { idImg },
    } = req;
    const img = await Images.findByPk(+idImg);
    const deleteImg = await img.destroy({ returning: true });
    if (!deleteImg) {
      return next(createError(400, 'Images can`t delete'));
    }
    res.send(img);
  } catch (err) {
    next(err);
  }
};
