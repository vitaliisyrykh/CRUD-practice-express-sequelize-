const { SuperPowers } = require('../models');
const createError = require('http-errors');

module.exports.createSuperPower = async (req, res, next) => {
  try {
    const { heroInstance, body } = req;
    const addedPowers = await heroInstance.createSuperPower(body, {
      returning: true,
    });
    if (!addedPowers) {
      return next(createError(400, 'Super power can`t be create'));
    }
    res.status(200).send(addedPowers);
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperPower = async (req, res, next) => {
  try {
    const { heroInstance } = req;
    const superPowers = await heroInstance.getSuperPowers({ returning: true });
    if (!superPowers) {
      return next(createError(404, 'Super powers not found'));
    }
    res.status(200).send(SuperPowers);
  } catch (err) {
    next(err);
  }
};

module.exports.getPower = async (req, res, next) => {
  try {
    const {
      heroInstance,
      params: { idPower },
    } = req;
    const superPower = await heroInstance.getSuperPowers({
      where: { id: idPower },
      returning: true,
    });
    if (!superPower) {
      return next(404, 'Super power not found');
    }
    res.status(200).send(superPower);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePower = async (req, res, next) => {
  try {
    const {
      params: { idPower },
      body,
    } = req;
    const power = await SuperPowers.findByPk(idPower);
    const updatedPower = await power.update(body, { returning: true });
    if (!updatedPower) {
      return next(createError(400, 'Super power can`t be update'));
    }
    res.status(200).send(UpdatedPower);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperPower = async (req, res, next) => {
  try {
    const {
      params: { idPower },
    } = req;
    const supPower = await SuperPowers.findByPk(+idPower);
    const deletedPower = await supPower.destroy({ returning: true });
    if (!deletedPower) {
      return next(createError(400, 'Super power can`t be delete'));
    }
    res.send(supPower);
  } catch (err) {
    next(err);
  }
};
