let number1 = 10;
let number2 = 2;
let total = number1 + number2 > 2;

let miPrimeraPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  // En la vida real, probablemente uses algo como XHR o una API HTML5.
  setTimeout(function () {
    resolve(total); // ¡Todo salió bien!
  }, 1000);
});

miPrimeraPromise.then((successMessage) => {
  // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
  // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
  console.log("¡Sí! " + successMessage);
});