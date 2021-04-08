const { Images } = require('../models/Images');

module.exports.addImgs = async (req, res, next) => {
  try {
    const{heroInstance,file:{filename}}=req;

    const addedImg = await heroInstance.setImage({path:filename});
    res.send(addedImg);
  } catch (err) {
    next(err);
  }
};
