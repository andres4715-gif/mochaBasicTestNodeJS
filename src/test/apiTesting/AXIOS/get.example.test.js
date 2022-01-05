const axios = require("axios").default;

// GET
axios.get("https://reqres.in/api/users?page=2").then((result) => {
  console.log(result.status);
  console.log(result.statusText);
});
