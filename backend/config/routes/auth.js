const express = require('express');
const router = express.Router();

const passport = require('../passport');
const user = require('../../app/controllers/user');

router.post('/login', passport.authenticate('local'), user.getUserToken);
router.post('/register', passport.authenticate('local.signup'), user.getUserToken);

module.exports = router;
