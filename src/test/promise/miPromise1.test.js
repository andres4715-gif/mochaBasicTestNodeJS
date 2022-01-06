const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);
  setTimeout(
    () => (number > 5 ? resolve(number) : reject(new Error("this is < 5"))),
    1000
  );
  console.log("The number is: ", number);
});

promise
  .then((number) => console.log(number))
  .catch((error) => console.error(error));
