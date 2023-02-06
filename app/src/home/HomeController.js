const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

// TODO: Actually fetch our data from a database!
router.get('/teamRankings', (req, res) => {
	res.json(
		{ status: 1, teamRankings:[{id: "0"},{id: "1"}] }
	);
});

module.exports = router;