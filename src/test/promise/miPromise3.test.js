const text = "123321";
const textAmountNumber = text.length;
const half = textAmountNumber / 2;

const palindrome = new Promise((resolve) => {
  setTimeout(() => {
    for (let i = 0; i < half; i++) {
      if (text[i] !== text[textAmountNumber - 1 - i]) {
        resolve(false);
      }
      resolve(true);
    }
  }, 4000);
});

palindrome.then((message) => {
  console.log("The message is: ", message);
  if (message === true) {
    console.log("We are good");
  } else {
    console.log("We are bad");
  }
});
