const assert = require("chai").assert;

const num1 = 10;
const num2 = 12;
const total = num1 + num2 > 20;

const suma = new Promise((resolve) => {
  setTimeout(() => {
    resolve(total);
    assert.isTrue(total, "check this number is < 20");
  }, 2000);
});

suma.then((success) => {
  console.log(success);
});
