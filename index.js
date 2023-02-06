require("dotenv").config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;
const home = require('./app/src/home/HomeController.js');

/**
 * Set up our view engine
 */
app.set('views', path.join(__dirname, 'app', 'resources', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('app/resources'));

app.use('/', home);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})