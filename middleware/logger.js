const loggerMiddleware = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} from IP: ${ip}`);
    next();
};

module.exports = loggerMiddleware;