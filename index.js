require("dotenv").config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;

/**
 * Set up our view engine
 */
app.set('views', path.join(__dirname, 'app', 'resources', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send("Test");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})