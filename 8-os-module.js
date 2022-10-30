const { userInfo, uptime, type, release, totalmem, freemem } = require("os");

const currentOS = {
  type: type(),
  release: release(),
  "up time": uptime(),
  "user information": userInfo(),
  "total memory": totalmem(),
  "free memory": freemem(),
};

console.log(currentOS);
