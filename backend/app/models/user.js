const mongoose = require('mongoose');
const authRoles = require('../constants/roles');
const { hashSync, genSaltSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoosePaginate = require('mongoose-paginate');
const { isEmail } = require('validator');
const i18n = require('../../config/i18n');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        validate: [isEmail, i18n.t('EMAIL_VALIDATION')],
    },
    password: {
        type: String,
        required: true,
    },
    role: { type: String, default: authRoles.USER_ROLE },
    // verified: { type: Boolean, default: false },
    firstName: { type: String },
    lastName: { type: String },
    birthday: { type: Date },
});

UserSchema.methods = {
    comparePassword: function (password) {
        if (!password) return false;
        return compareSync(password, this.password);
    },

    generateJwtToken: function () {
        const { _id, email, role, verified } = this;
        return `Bearer ${jwt.sign({ _id, email, role, verified }, process.env.JWT_SECRET, {
            expiresIn: Number(process.env.JWT_EXPIRATION),
        })}`;
    },

    generateCookie: function () {
        return {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            expires: new Date(Date.now() + Number(process.env.JWT_EXPIRATION)),
        };
    },

    resUserData: function () {
        return {
            email: this.email,
            id: this._id,
            role: this.role,
            verified: this.verified,
        };
    },
};

UserSchema.statics = {
    load: function (options, cb) {
        options.select = options.select || 'name username';
        return this.findOne(options.criteria).select(options.select).exec(cb);
    },
    passwordHash: (password) => hashSync(password, genSaltSync(10), null),
};

UserSchema.plugin(mongoosePaginate);
mongoose.model('User', UserSchema);
