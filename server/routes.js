const { Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/', controller.getPlayers);
router.get('/:playerName', controller.getPlayerByName);

module.exports = router;