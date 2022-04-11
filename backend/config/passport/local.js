'use strict';

const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');
const config = require('..');

module.exports = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            let user = await User.findOne({ email });

            if (!user) {
                throw new Error('nknown user');
            }
            if (!user.comparePassword(password)) {
                throw new Error('WRONG_EMAIL_OR_PASSWORD');
            }

            return done(null, user);
        } catch (error) {
            done(error);
        }
    }
);
