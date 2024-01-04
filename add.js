// exports.greet = () => {
//   return "Hello User";
// };

// exports.perimeter = (l, b) => {
//   return 2 * (l + b);
// };
// exports.area = (l, b) => {
//   return l * b;
// };
// Instead of doing export for each function

perimeter = (l, b) => {
  return 2 * (l + b);
};
area = (l, b) => {
  return l * b;
};

module.exports = { perimeter, area };
