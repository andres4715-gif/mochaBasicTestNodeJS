// hacer una suma de dos numeros, si la suma de los numeros ingresados es mayor que 10 debo hacer una multiplicacion de los numeros ingresados
// eso se debe hacer con una promesa para identificar que la primera suma efectivamente si sea true

const num1 = 5;
const num2 = 8;
const limit = 10;
const add = num1 + num2;

const getAdd = new Promise((resolve) => {
  setTimeout(() => {
    if (add < limit) {
      resolve(false);
    } else {
      resolve(true);
    }
  }, 2000);
});

getAdd.then((response) => {
  console.log("The promise response is: ", response);
  if (response === true) {
    const Multiplication = num1 * num2;
    console.log("The Multiplication result is: ", Multiplication);
    return Multiplication;
  } else {
    console.log("Multiplication isn't necessary");
  }
});
