var os = require("os");

// For free memory available in operating system : OP 3732508672
console.log(os.freemem());
//Architecture
console.log(os.arch());
// Laptop hostname
console.log(os.hostname());
//Home directory
console.log(os.homedir());
// Platform win32
console.log(os.platform());
// Version of Windows
console.log(os.version());
// User information
console.log(os.userInfo());

