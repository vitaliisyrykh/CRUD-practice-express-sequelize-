const { SuperHeroes } = require('../models/');

module.exports.checkHero = async (req, res, next) => {
  try {
    const {
      params: { idHero },
    } = req;

    const heroInstance = await SuperHeroes.findByPk(idHero);
    if (!heroInstance) {
      return next(createError(404, ' Heroe not found'));
    }
    console.log(heroInstance);
    req.heroInstance = heroInstance;
    next();
  } catch (err) {
    next(err);
  }
};
