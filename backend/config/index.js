const path = require('path');

const development = require('./env/development');
const production = require('./env/production');

const defaults = {
    root: path.join(__dirname, '..'),
    uploads: path.join(__dirname, '../uploads'),
};

module.exports = {
    development: Object.assign({}, development, defaults),
    production: Object.assign({}, production, defaults),
}[process.env.NODE_ENV || 'development'];
