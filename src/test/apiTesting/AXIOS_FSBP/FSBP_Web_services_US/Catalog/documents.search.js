const axios = require("axios").default;

axios({
  method: "get",
  baseURL: "https://api-stage.firestonebpco.com",
  url: "/solr/site_search/select?q=roof&fq=(country:us)&fq=(language:en)&fq=(type:assets)&rows=10&facet.field=documentType&facet=true",
}).then(function (response) {
  console.log(response.data).catch(function (err) {
    console.log(err);
  });
});
