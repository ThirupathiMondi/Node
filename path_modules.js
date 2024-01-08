var path = require("path");
// For File path
const file_name = path.parse(__filename);
console.log(file_name);

// For path till current file folder
const dir_name = path.parse(__dirname);
console.log(dir_name);
