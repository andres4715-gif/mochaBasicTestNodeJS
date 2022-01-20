class Palindrome5 {
  checkPalindrome5(text) {
    const amount = text.length;
    const half = amount / 2;
    for (let i = 0; i < half; i++) {
      if (text[i] !== text[amount - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

module.exports = new Palindrome5();
