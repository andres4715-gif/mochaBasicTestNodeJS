const axios = require("axios");

axios
  .get("https://reqres.in/api/users?page=2")
  .then((result) => {
    // const apiData = result.data.data;
    // console.log(apiData);
    let ids = [];
    let email = [];
    let first_name = [];
    let last_name = [];
    let avatar = [];

    for (let i = 0; i < result.data.data.length; i++) {
      ids.push(result.data.data[i].id);
      email.push(result.data.data[i].email);
      first_name.push(result.data.data[i].first_name);
      last_name.push(result.data.data[i].last_name);
      avatar.push(result.data.data[i].avatar);
    }
    console.log(ids);
    console.log(email);
    console.log(first_name);
    console.log(last_name);
    console.log(avatar);
  })
  .catch((error) => {
    console.log(error);
  });
