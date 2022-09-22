const express = require('express');

const {
	createBuzon, getAllBuzon,
} = require('../controllers/buzon.controller.js');

const buzonRouter = express.Router();

buzonRouter.get('/', getAllBuzon);
buzonRouter.post('/', createBuzon);

module.exports = { buzonRouter };