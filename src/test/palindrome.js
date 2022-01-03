// palindrome

const text = "123321";
const textAmount = text.length;
const half = textAmount / 2;

const palindrome = () => {
  for (let i = 0; i < half; i++) {
    if (text[i] !== text[textAmount - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(palindrome());
