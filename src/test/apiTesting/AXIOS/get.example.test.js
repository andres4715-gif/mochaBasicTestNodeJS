const axios = require("axios").default;

// GET
// axios.get("https://reqres.in/api/users?page=2").then((result) => {
//   console.log(result.status);
//   console.log(result.statusText);
// });

// GET other example
// axios({
//   method: "get",
//   url: "http://bit.ly/2mTM3nY",
//   responseType: "stream",
// }).then(function (response) {
//   console.log(response.status);
//   console.log(response.statusText);
// });

// GET other example with baseURL
axios({
  method: "get",
  baseURL: "https://reqres.in/api",
  url: "/users?page=1",
}).then(function (response) {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.data);
});
