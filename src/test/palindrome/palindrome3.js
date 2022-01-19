const text = "123325";
const amount = text.length;
const half = amount / 2;

class palindrome3 {
  palindromeTest3() {
    for (let i = 0; i < half; i++) {
      if (text[i] !== text[amount - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

module.exports = new palindrome3();
