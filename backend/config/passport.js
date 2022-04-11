'use strict';

const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = mongoose.model('User');

const localSignUp = require('./passport/local-signup');
const local = require('./passport/local');
const passport = require('passport');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(opts, ({ _id: id }, cb) => User.findById(id, cb)));
passport.serializeUser(({ id }, cb) => cb(null, id));
passport.deserializeUser((id, cb) => User.findById(id, cb));

passport.use('local', local);
passport.use('local.signup', localSignUp);

module.exports = passport;
