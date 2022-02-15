// hacer un palindrome y si el resultado es true en otro metodo sacar de un array dado, los numeros mayores de 10 y si es false sacar de
// ese misno array los numeros menores de 10
// esto se debe ejecutar por medio de una promesa en el palindrome.

const myArray = [8, 7, 56, 98, 78, 38, 1, 4, 3];
const text = "123321";
const textNumber = text.length;
const half = textNumber / 2;

const palindrome = new Promise((resolve) => {
  setTimeout(() => {
    for (let i = 0; i < half; i++) {
      if (text[i] !== text[textNumber - 1 - i]) {
        resolve(false);
      } else {
        resolve(true);
      }
    }
  }, 4000);
});

palindrome.then((check) => {
  console.log("Practice 7 is a palindrome?: ", check);
  if (check !== false) {
    const filtering = myArray.filter((item) => item > 10);
    console.log("Array Response: ", filtering);
  } else {
    const filtering = myArray.filter((item) => item < 10);
    console.log("Array Response: ", filtering);
  }
});
