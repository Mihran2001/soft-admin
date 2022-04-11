/*
 * Module dependencies.
 */

const auth = require('./auth');
const admin = require('./admin');
const upload = require('./upload');

module.exports = (app) => {
    /**
     *  Default router paths
     */
    app.use('/auth', auth);
    app.use('/admin', admin);
    app.use('/upload', upload);

    /**
     * Error handling
     */

    app.use(function (err, req, res, next) {
        console.error('Something went wrong, check this error', err);
        const { status = 400, message = 'Something went wrong', name, errors = {} } = err;

        if (name === 'ValidationError') {
            const errors = Object.keys(err.errors).map((field) => ({ field, message: err.errors[field].message }));
            res.status(status).send(errors);
            return;
        }

        res.status(status).send({ message, name });
    });

    // assume 404 since no middleware responded
    app.use(function (req, res) {
        const resPayload = {
            url: req.originalUrl,
            error: 'Not found',
        };
        if (req.accepts('json')) return res.status(404).json(resPayload);
        res.status(404).render('404', resPayload);
    });
};
