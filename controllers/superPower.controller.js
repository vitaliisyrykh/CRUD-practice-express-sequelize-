const {superPowers} = require('../models');

module.exports.createSuperPower = async (req, res, next) =>{
  try {
    const {heroInstance, body}=req;
    const addedPowers = await heroInstance.createSuperPower(body);
    res.send(addedPowers);
  } catch (err) {
    next(err)
  }
}