const { Router } = require('express');
const {checkHero} = require('../middlewares/checkHero.mw');
const superPowerController = require('../controllers/superPower.controller')

const superPowerRouter = Router({
  mergeParams:true
});

superPowerRouter.post('/',checkHero, superPowerController.createSuperPower);
superPowerRouter.get('/',checkHero,superPowerController.getSuperPower);

superPowerRouter.route('/:idPower', checkHero)
  .get(superPowerController.getPower)
  .delete(superPowerController.deleteSuperPower);


module.exports = superPowerRouter;