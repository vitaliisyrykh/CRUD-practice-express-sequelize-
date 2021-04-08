const { Router } = require('express');
const {checkHero} = require('../middlewares/checkHero.mw');
const pagination = require('../middlewares/pagination.mw');
const superHeroesController = require('../controllers/superHeroes.controller');

const imgsRouter = require('./routerImgs');
const superPowerRouter = require('./routerSuperPower');

superHeroRouter = Router({
  mergeParams:true
});
superHeroRouter.post('/', superHeroesController.createSuperHeroe);
superHeroRouter.get('/', pagination, superHeroesController.getAllHeroes);

superHeroRouter
  .route('/:idHero')
  .get(checkHero,superHeroesController.getHero)
  .patch(superHeroesController.updateHero)
  .delete(superHeroesController.deleteHero);

superHeroRouter.use('/:idHero/imgs',imgsRouter);
superHeroRouter.use('/:idHero/superpower', superPowerRouter);

module.exports = superHeroRouter;
