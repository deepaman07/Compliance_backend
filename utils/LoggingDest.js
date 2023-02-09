const fs = require("fs");
const path = require("path");
var loggingDest = {
  file: function (logmessage) {
    let currentdate = new Date();
    currentdate = `${currentdate.getDate()}-${
      currentdate.getMonth() + 1
    }-${currentdate.getFullYear()}`;

    let logFile = path.join(__dirname, `../logs/api_log_${currentdate}.txt`);
    fs.chmodSync(path.join(__dirname, "../logs/"), 0o765);

    let stream = fs.createWriteStream(logFile, { flags: "a" });
    stream.write(`Request:: ${new Date().toLocaleString()} ${logmessage} \n`);
    stream.end();
  },
};
module.exports = loggingDest;
