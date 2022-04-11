const mongoose = require('mongoose');
const Tags = mongoose.model('Tags');

exports.get = async (req, res, next) => {
    const name = req.query.name;
    try {
        let tags = await Tags.find({ name: new RegExp(name) });
        res.json(tags);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        const tags = await Tags.create(req.body);
        res.json(tags);
    } catch (e) {
        next(e);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const tag = await Tags.findById(req.params.id);
        if (tag) {
            res.json(tag);
        } else {
            throw new Error('not found');
        }
    } catch (error) {
        next({ status: 404, message: error.message });
    }
};

exports.update = async (req, res, next) => {
    try {
        const tag = await Tag.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
        res.json(tag);
    } catch (e) {
        next(e);
    }
};
