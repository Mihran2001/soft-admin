const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const winston = require('winston');
const config = require('./');
const passport = require('./passport');
const fileUpload = require('express-fileupload');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = function (app) {
    app.use(helmet());
    app.use(fileUpload());
    app.use(compression({ threshold: 512 }));

    app.use(function (req, res, next) {
        const allowedOrigins = [
            '*',
            'http://localhost:4000',
            'http://localhost:3003',
            'http://localhost:3000',
            'https://admin.softconstruct.com',
            'http://softconstruct.com',
        ];
        if (allowedOrigins.includes(req.headers.origin)) {
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, Content-Type, Set-Cookie, Cookie');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Credentials', true);
        }
        next();
    });

    // Static files middleware
    app.use('/static', express.static(config.uploads));

    // Use winston on production
    let log = 'dev';

    if (!isDev) {
        log = { stream: { write: (message) => winston.info(message) } };
    }

    app.use(morgan(log));
    app.use(cookieParser());
    app.use(express.json({ limit: '3mb' }));
    app.use(express.urlencoded({ extended: true }));

    // use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    if (isDev) {
        app.locals.pretty = true;
    }
};
