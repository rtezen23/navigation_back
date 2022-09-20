const express = require('express');
var cors = require('cors');

const { buzonRouter } = require('./routes/buzon.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/buzon', buzonRouter);

module.exports = { app };   