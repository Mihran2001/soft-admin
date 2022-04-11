const { ADMIN_ROLE } = require('../../app/constants/roles');
const passport = require('../passport');

exports.adminAuth = function (req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (user && user.role === ADMIN_ROLE) {
            return req.login(user, {}, next);
        } else {
            return next({ status: 401, message: 'Unauthorized' });
        }
    })(req, res, next);
};

exports.jwtAuth = function (req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        return user ? req.login(user, {}, next) : next();
    })(req, res, next);
};
