class Addition {
  constructor() {}
  add(...a) {
    let sum = 0;
    a.forEach((i) => (sum += i));
    return "Sum is : " + sum;
  }
}
module.exports = Addition;
