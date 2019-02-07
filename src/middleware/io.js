const ioMiddleware = (io) => (req, res, next) => {
    req.io = io;
    return next();
}

module.exports = ioMiddleware;