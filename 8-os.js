const os = require("os");
console.log(os);

const myOs = {
    type: os.type(),
    uptime: os.uptime(),
};
console.log(myOs);