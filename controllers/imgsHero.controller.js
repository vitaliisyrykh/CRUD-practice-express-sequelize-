const { Images } = require('../models');

module.exports.addImgs = async (req, res, next) => {
  try {
    const{heroInstance,file:{filename}}=req;

    const addedImg = await heroInstance.createImage({path:filename});
    res.send(addedImg);
  } catch (err) {
    next(err);
  }
};

module.exports.updateImg = async (req,res,next) => {
  try {
    const {
      file:{filename},
      params: { idImg },
    } = req;
    const [rowsCount, [updatedImg]] = await Images.update({path:filename}, {
      where: { id: +idImg },
      returning: true,
    });
    res.status(201).send(updatedImg);
  } catch (err) {
    next(err);
  }
}

module.exports.getAllImgs =async (req,res,next) => {
  try {
    const{heroInstance}=req;
    const img= await heroInstance.getImages();
    console.log(img);
    res.status(200).send(img);
  } catch (err) {
    next(err)
  }
};

module.exports.deleteImg = async (req, res, next) => {
  try {
    const{params:{idImg}}=req;
   const img = await Images.findByPk(+idImg);
    await img.destroy({returning: true});
    res.send(img);
  } catch (err) {
    next(err)
  }
};