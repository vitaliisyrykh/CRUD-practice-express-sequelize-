const { SuperHeroes,Images, SuperPowers } = require('../models');
const createError = require('http-errors');

module.exports.createSuperHeroe = async (req, res, next) => {
  try {
    const { body:{superPowers},body,files } = req;
    const createdHero = await SuperHeroes.create(body);

    if(files.length){
      const imgs =  files.map(file=>({
         path:file.filename,
         superHeroesId:createdHero.id
      }));
      await Images.bulkCreate(imgs,{returning:true})
    };
    
    if(superPowers.length){
      const powers = superPowers.map(powerObj=>({
        power: powerObj.power,
        discription: powerObj.discription,
        superHeroesId:createdHero.id
      }));
      await SuperPowers.bulkCreate(powers,{returning:true});
    };
    
    if (!createdHero) {
      return next(createError(400, 'Invalid error'));
    }
    res.status(200).send(createdHero);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const allSuperHero = await SuperHeroes.findAll({
      attributes: { exclude: ['createdAt'] },
      ...pagination,
      returning:true
    });
    if (!allSuperHero) {
      return next(createError(404, 'Heroes not found'));
    }
    res.status(200).send(allSuperHero);
  } catch (err) {
    next(err);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const { heroInstance } = req;

    res.status(200).send(heroInstance);
  } catch (err) {
    next(err);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { idHero },
    } = req;
    const [rowsCount, [updatedHero]] = await SuperHeroes.update(body, {
      where: { id: idHero },
      returning: true,
    });
    if (rowsCount !== 1) {
      return next(createError(400, 'Heroe can`t update'));
    }
    res.status(200).send(updatedHero);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { idHero },
    } = req;
    const deletedHeroe = await SuperHeroes.destroy({
      where: { id: idHero },
      returning: true,
    });
    if (!deletedHeroe) {
      return next(createError(400, 'Heroe can`t delete'));
    }
    res.send(deletedHeroe);
  } catch (err) {
    next(err);
  }
};
