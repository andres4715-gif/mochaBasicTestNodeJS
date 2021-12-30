var assert = require("chai").assert;

class Operations {
  sumando(num1, num2) {
    const totalSuma = num1 + num2;
    const check = totalSuma >= 0 ? true : false;
    console.log(check);
    assert.isTrue(check, "Sumando result is negative please check it...");
  }

  positiveNumber(num1, num2) {
    const totalResta = num1 - num2;
    console.log(totalResta);
    const positive = totalResta >= 0 ? true : false;
    assert.isTrue(positive, "The number negative, please check it...");
  }
}

module.exports = new Operations();
