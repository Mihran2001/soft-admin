class ApiError extends Error {
    constructor(message, name = 'apiError', status) {
        super(message);
        this.name = name;
        this.status = status || 400;
    }
}

module.exports = ApiError;
