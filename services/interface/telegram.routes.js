var express = require('express');
router = express.Router();

const telegram_controller = require('./controllers/telegram.controllers');

/*
	GET		/user
			/user/BTC
			/user/ETH
			/user/USD
	POST 	/user
	PUT 	/user/balance
	DELETE	/plannedaction/:id
*/

// a simple test url to check that our app is up and running
router.get('/test', function (req, res) {
    res.send('Hello from Telegram Service!');
});

router.get('/auth/', telegram_controller.auth)

module.exports = router;