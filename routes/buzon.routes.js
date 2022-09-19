const express = require('express');

const {
	createBuzon,
} = require('../controllers/buzon.controller.js');

const buzonRouter = express.Router();

buzonRouter.post('/signup', createBuzon);

module.exports = { buzonRouter };