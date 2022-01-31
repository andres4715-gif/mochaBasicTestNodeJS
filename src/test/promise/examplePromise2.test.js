function randomDelayed(max, expected, delay) {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * max);
    console.log("The number is: ", number);
    setTimeout(() => {
      number > expected
        ? resolve(number)
        : reject(new Error("Number is less than the expected number!!"));
    }, delay);
  });
}

randomDelayed(6, 3, 3000)
  .then((number) => console.log(number))
  .catch((err) => console.log(err));
