const number_one = 11;
const number_two = 27;
const util = require('./calculator');

const calculator = new util();

console.log(calculator.add(number_one, number_two));
console.log(calculator.divide(number_one, number_two));
console.log(calculator.multiply(number_one, number_two));
console.log(calculator.substract(number_one, number_two));
