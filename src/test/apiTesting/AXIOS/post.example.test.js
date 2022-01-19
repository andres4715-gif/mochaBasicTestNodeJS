const axios = require("axios").default;

// POST
axios
  .post("https://reqres.in/api/users", {
    name: "morpheus",
    job: "leader",
  })
  .then(function (result) {
    console.log(result.status);
    console.log(result.statusText);
    console.log(result.data);
  })
  .catch(function (error) {
    console.log(error);
  });
