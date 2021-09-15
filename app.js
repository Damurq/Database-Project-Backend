const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();

app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
     message: 'Welcome to the backend of the Database project (2021). - Polaris Team',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;