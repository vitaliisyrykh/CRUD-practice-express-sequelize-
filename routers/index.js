const { Router } = require('express');
const routerHero = require('./routerHero');
const router = Router();

router.use('/superHeroes', routerHero)

module.exports = router;