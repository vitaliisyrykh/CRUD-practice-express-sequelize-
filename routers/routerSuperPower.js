const { Router } = require('express');
const {checkHero} = require('../middlewares/checkHero.mw');
const superPowerController = require('../controllers/superPower.controller')

const superPowerRouter = Router({
  mergeParams:true
});

superPowerRouter.post('/',checkHero, superPowerController.createSuperPower);


module.exports = superPowerRouter;