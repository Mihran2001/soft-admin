require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 9001;

const app = express();

const http = require('http');
const httpServer = http.createServer(app);

module.exports = app;

// Bootstrap models
fs.readdirSync(models)
    .filter((file) => ~file.search(/^[^.].*\.js$/))
    .forEach((file) => require(join(models, file)));

// Bootstrap routes
require('./config/express')(app);
require('./config/routes')(app);

connect();

function listen() {
    httpServer.listen(port);
    console.log('SoftConstruct.com started on port ' + port);
}

function connect() {
    mongoose.connection.on('error', console.log).on('disconnected', connect).once('open', listen);
    return mongoose.connect(config.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
}
