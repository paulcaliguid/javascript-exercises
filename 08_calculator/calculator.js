const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  let array = arguments[0]
	let partialSum = 0;
  for(let i=0; i<array.length; i++) {
    partialSum += array[i];
  }
  return partialSum;
};

const multiply = function() {
  let array = arguments[0];
  let partialProduct = array[0];
  for(let i=1; i<array.length; i++) {
    partialProduct *= array[i];
  }
  return partialProduct;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
  let partialFactorial = 1;
	for(i = arguments[0]; i>1; i--) {
    partialFactorial *= i;
  }
  return partialFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
