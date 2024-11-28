const calculateNumber = require('./1-calcul');

console.log(calculateNumber('SUM', 1.4, 4.5)); // Output: 6
console.log(calculateNumber('SUBTRACT', 1.4, 4.5)); // Output: -3
console.log(calculateNumber('DIVIDE', 1.4, 0)); // Output: "Error"
console.log(calculateNumber('DIVIDE', 7.5, 2.2)); // Output: 4
