const { Router } = require('express');
const routerHero = require('./routerHero');
const router = Router();

router.use('/superheroes', routerHero);

module.exports = router;
