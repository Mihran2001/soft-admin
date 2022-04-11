const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.getUserToken = async (req, res) => {
    if (!req.user) return res;
    const token = req.user.generateJwtToken();

    res.cookie('token', token, req.user.generateCookie()).json({ ...req.user.resUserData(), token });
};

module.exports.getUsers = async (req, res, next) => {
    try {
        const user = await User.find({});
        res.json(user);
    } catch (error) {
        next(error);
    }
};

module.exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('email _id role');
        res.json(user);
    } catch (error) {
        next(error);
    }
};
