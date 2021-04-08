const { SuperHeroes } = require('../models/SuperHeroes');

module.exports.checkHero = async (req, res, next) => {
  try {
    const {
      params: { idHero },
    } = req;
    
    const heroInstance = await SuperHeroes.findByPk(idHero);
    if (!heroInstance) {
      throw new Error('Hero not found')
      
    };
    console.log(heroInstance);
    req.heroInstance = heroInstance;
    next();
  } catch (err) {
    next(err);
  }
};
