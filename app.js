const express = require('express');
var cors = require('cors');
const path = require('path');

const { buzonRouter } = require('./routes/buzon.routes');
const { cumplesRouter } = require('./routes/cumples.routes');
const { viewsRouter } = require('./routes/views.routes');

const app = express();

app.use(cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

app.use('/api/v1/buzon', buzonRouter);
app.use('/api/v1/cumples', cumplesRouter);
app.use('/*', viewsRouter);

module.exports = { app };   