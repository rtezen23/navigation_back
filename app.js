const express = require('express');

const { buzonRouter } = require('./routes/buzon.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/buzon', buzonRouter);

module.exports = { app };