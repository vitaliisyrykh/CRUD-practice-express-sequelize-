const { Router } = require('express');
const pagination = require('../middlewares/pagination.mw');
const {checkHero} = require('../middlewares/checkHero.mw');
const superHeroesController = require('../controllers/superHeroes.controller');
const imgsRouter = require('./routerImgs');

superHeroRouter = Router();
superHeroRouter.post('/', superHeroesController.createSuperHeroe);
superHeroRouter.get('/', pagination, superHeroesController.getAllHeroes);

superHeroRouter
  .route('/:idHero')
  .get(superHeroesController.getHero)
  .patch(superHeroesController.updateHero)
  .delete(superHeroesController.deleteHero);

superHeroRouter.use('/:idHero/imgs',checkHero,imgsRouter);

module.exports = superHeroRouter;
