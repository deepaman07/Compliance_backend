const winston = require("winston");
const fs = require("fs");
const path = require("path");
const CustomTransport = require("./CustomTransport");
/* winston.add(_customTransport, {
  level: 'error'
}); */
const myCustomLevels = {
  levels: {
    database: 0,
    error: 1,
    warn: 2,
    info: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
};
module.exports = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  levels: myCustomLevels.levels,
  transports: [
    //add for different logging levels that need to be saved in database
    new winston.transports.CustomTransport({ name: "error", level: "error" }),
    new winston.transports.CustomTransport({ level: "debug" }),
    new winston.transports.File({
      name: "database",
      level: "database",
      stream: fs.createWriteStream(
        path.join(__dirname, "../logs/connection_log.txt"),
        { flags: "a" }
      ),
    }),
  ],
});
