const axios = require("axios");

axios
  .get("https://reqres.in/api/users?page=2")
  .then((result) => {
    const apiData = result.data.data;
    console.log(apiData);
  })
  .catch((error) => {
    console.log(error);
  });
