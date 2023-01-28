const express = require('express');
const route = express.Router();
const homeControler = require('./src/controllers/homeController');

route.get('/', homeControler.getHome);
route.post('/', homeControler.postHome);

module.exports = route;