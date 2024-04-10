const { Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/', controller.getAllPlayers);
router.get('/search/:query', controller.searchForMatchingPlayers);
router.get('/:playerName', controller.getPlayerByName);

module.exports = router;