function gettingNumber(number, max, delay) {
    console.log("The number added is: ", number);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            number > max
                ? resolve(number)
                : reject("The number is lower than expected");
        }, delay);
    });
}

gettingNumber(21, 20, 3000)
    .then(number => console.log(number + 40))
    .catch(error => console.log(error));
