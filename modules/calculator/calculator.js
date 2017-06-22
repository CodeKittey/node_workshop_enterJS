const Calculator = function() {};

Calculator.prototype.add = function(first, second) {
  return first + second;
};

Calculator.prototype.substract = function(first, second) {
  return first - second;
};

Calculator.prototype.divide = function(first, second) {
  if (second === 0) return;

  return first / second;
};

Calculator.prototype.multiply = function(first, second) {
  return first * second;
};

module.exports = Calculator;
