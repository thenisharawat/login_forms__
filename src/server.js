const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const PORT = process.env.PORT || 2060


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const loginRoute = require('./routes/login.route');

app.use('/', loginRoute);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});