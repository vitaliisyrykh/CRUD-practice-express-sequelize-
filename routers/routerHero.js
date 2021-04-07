const { Router } = require('express');
const pagination = require('../middlewares/pagination');

const superHeroesController = require('../controllers/superHeroes.controller');

superHeroRouter = Router();

superHeroRouter.post('/', superHeroesController.createSuperHeroe);
superHeroRouter.get('/',pagination, superHeroesController.getAllHeroes);

superHeroRouter.get('/:idHero', superHeroesController.getHero);
superHeroRouter.patch('/:idHero', superHeroesController.updateHero);

module.exports = superHeroRouter;