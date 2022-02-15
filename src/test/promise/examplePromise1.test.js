const getNumber = new Promise((resolve, reject) => {
  const aleatoryNumber = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (aleatoryNumber > 5) {
      console.log("The aleatory number greater is: ", aleatoryNumber);
      resolve(aleatoryNumber);
    } else {
      reject(new Error("El numero es menor que 5"));
    }
  }, 4000);
});

getNumber
  .then((number) => console.log("this is the second part", number))
  .catch((err) => console.log(err));
