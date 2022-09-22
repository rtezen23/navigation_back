const express = require('express');

const {
	getAllCumples,
} = require('../controllers/cumples.controller.js');

const cumplesRouter = express.Router();

cumplesRouter.get('/', getAllCumples);

module.exports = { cumplesRouter };