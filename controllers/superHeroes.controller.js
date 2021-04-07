const {SuperHeroes} = require('../models');

module.exports.createSuperHeroe = async (req,res,next) => {
  try {
    const {body}=req;
    const createdHero = await SuperHeroes.create(body);
    res.status(200).send(createdHero);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllHeroes = async (req, res , next) => {
  try {
    const{pagination}=req;
    const allSuperHero = await SuperHeroes.findAll({
      attributes:{exclude:['createdAt']},
      ...pagination
    })
    res.status(200).send(allSuperHero);
  } catch (err) {
    next(err);
  }
}