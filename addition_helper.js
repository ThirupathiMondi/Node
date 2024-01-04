let cls = require("./addition");
let obj = new cls();
console.log(obj.add(2, 3, 4, 5));
console.log(obj.add(2, 5));
console.log(obj.add(2, 3, 4));
console.log(obj.add(4, 5));
console.log(obj.add(2, 3, 4, 5, 4, 5, 6, 6, 7, 7, 8, 6, 5, 4, 3));
