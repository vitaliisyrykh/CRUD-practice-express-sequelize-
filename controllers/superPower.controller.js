const { SuperPowers } = require('../models');

module.exports.createSuperPower = async (req, res, next) => {
  try {
    const { heroInstance, body } = req;
    const addedPowers = await heroInstance.createSuperPower(body);
    res.send(addedPowers);
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperPower = async (req, res, next) => {
  try {
    const { heroInstance } = req;
    const SuperPowers = await heroInstance.getSuperPowers();
    res.status(200).send(SuperPowers);
  } catch (err) {
    next(err);
  }
};

module.exports.getPower = async (req, res, next) => {};

module.exports.deleteSuperPower = async (req, res, next) => {
  try {
    const {
      params: { idPower },
    } = req;
    const supPower = await SuperPowers.findByPk(+idPower);
    await supPower.destroy({ returning: true });
    res.send(supPower);
  } catch (err) {
    next(err);
  }
};
