const { SuperHeroes } = require('../models')

module.exports.createSuperHeroe = async (req, res, next) => {
  try {
    const { body } = req
    const createdHero = await SuperHeroes.create(body)
    res.status(200).send(createdHero)
  } catch (err) {
    next(err)
  }
}

module.exports.getAllHeroes = async (req, res, next) => {
  try {
    const { pagination } = req
    const allSuperHero = await SuperHeroes.findAll({
      attributes: { exclude: ['createdAt'] },
      ...pagination
    })
    res.status(200).send(allSuperHero)
  } catch (err) {
    next(err)
  }
}

module.exports.getHero = async (req, res, next) => {
  try {
    const {
      heroInstance
    } = req;
    res.status(200).send(heroInstance);
  } catch (err) {
    next(err);
  }
}

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { idHero }
    } = req
    const [rowsCount, [updatedHero]] = await SuperHeroes.update(body, {
      where: { id: idHero },
      returning: true
    })
    res.status(200).send(updatedHero)
  } catch (err) {
    next(err)
  }
}

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { idHero }
    } = req
    const rowsCount = await SuperHeroes.destroy({where:{id:idHero},returning:true});
    res.send(rowsCount)
  } catch (err) {
    next(err)
  }
}
