var express = require('express');
router = express.Router();

const airtable_controller = require('./controllers/airtable.controller');

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
    res.send('Hello from AirTable Service!');
});

router.get('/members', airtable_controller.getMembers)
router.get('/members/:username', airtable_controller.getMember)

router.get('/form', airtable_controller.getMembersForm)

router.get('/tasks', airtable_controller.getTasks)
router.get('/tasks/:group', airtable_controller.getGroupTasks)
router.post('/tasks', airtable_controller.createAirTableTask)
router.post('/tasks/:group', airtable_controller.createAirTableTaskGroup)

module.exports = router;