const winston = require("winston");
const util = require("util");
const { file } = require("./LoggingDest");
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

let CustomTransport = function (options) {
  winston.Transport.call(this, options);
  options = options || {};
  this.name = "CustomTransport";
  this.options = options;
  this.level = options.level || "error";
};
/**
 * Inherit from `winston.Transport`.
 */
util.inherits(CustomTransport, winston.Transport);

/**
 * Core logging method exposed to Winston. Metadata is optional.
 * @param {object} info request made to the api, message, error
 * @param {Function} cb Continuation to respond to when complete.
 */
CustomTransport.prototype.log = function (info, cb) {
  // Avoid reentrancy that can be not assumed by database code.
  // If database logs, better not to call database itself in the same call.
  process.nextTick(() => {
    if (!cb) {
      cb = () => {};
    }
    //level to be logged
    let level = this.level ? this.level : "error";
    let request = info.req ? info.req : null;
    let error = info.err ? info.err : {};
    let url = request ? request.originalUrl : "";
    let body = request && request.method === "POST" ? request.body : {};
    let method = request ? request.method : "sequelize";
    let query = request ? request.query : {};
    let params = request ? request.params : {};

    let parameters =
      method === "POST"
        ? JSON.stringify(body)
        : `Query: ${JSON.stringify(query)}; Params: ${JSON.stringify(params)}`;
    let logmessage = `${level} : ${method} ${url} ${parameters} ${
      info.message
    } StackTrace ${JSON.stringify(error, getCircularReplacer())}`;
    if (request && request.enableLogging && request.enableLogging === true) {
      writeToLog(request.logDest, logmessage, cb);
    } else {
      cb(null, true);
    }
  });
  return true;
};
/**
 * log according to destination
 * @param {string} destination
 * @param {string} message
 * @param {function} cb callback function
 */
const writeToLog = function (destination, message, cb) {
  let response = 0;
  switch (destination) {
    case "f":
      response = file(message);
      break;
    default:
      response = file(message);
  }
  return response == 1 ? cb(null, true) : cb(response);
};

/**
 * Define a getter so that `winston.transports.CustomTransport`
 * is available and thus backwards compatible.
 */
winston.transports.CustomTransport = CustomTransport;

module.exports = CustomTransport;
