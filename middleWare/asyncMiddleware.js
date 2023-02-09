const boom = require("boom");
const logger = require("../utils/logger");
// wrapper for our async route handlers
// probably you want to move it to a new file
const asyncMiddleware = (fn) => (req, res, next) => {
  var message = "Internal server error";

  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (err.message) {
      message = err.message;
    }
    logger.error(message, { err, req });
    if (!err.isBoom) {
      logger.error(err.message, { err, req });
      return next(boom.badImplementation(err));
    }
    next(err);
  });
};
module.exports = asyncMiddleware;
