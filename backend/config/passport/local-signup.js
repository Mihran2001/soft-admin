'use strict';

const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');
const ApiError = require('../../app/helpers/error');
const { matches } = require('validator');
const { passRegexp } = require('../../app/validation/regexp');
const i18n = require('../i18n');

module.exports = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, email, password, done) => {
        console.log("role",req.body.role);
        try {
            let user = await User.findOne({ email });

            if (user) {
                throw new ApiError(i18n.t('EMAIL_IN_USE'), 'EMAIL_IN_USE');
            }

            if (!matches(password, passRegexp)) {
                throw new ApiError(i18n.t('PASSWORD_VALIDATION'), 'PASSWORD_VALIDATION');
            }

            user = new User({
                email,
                password: User.passwordHash(password),
            });

            return done(null, await user.save());
        } catch (error) {
            done(error);
        }
    }
);
