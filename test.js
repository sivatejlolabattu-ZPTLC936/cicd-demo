const sum = require('./app');

if (sum(2, 3) !== 5) {
  throw new Error("Test Failed");
}

console.log("Test Passed");