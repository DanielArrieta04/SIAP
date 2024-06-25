const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const conexion = require('./conexion');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());


// ROUTES

const userRoute = require('./routes/user');
app.use('/user',userRoute);

module.exports = app;