class Palindrome7 {
  checkingPalindrome7(text) {
    const numberText = text.length;
    const half = numberText / 2;
    for (let i = 0; i < half; i++) {
      if (text[i] !== text[numberText - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

module.exports = new Palindrome7();
