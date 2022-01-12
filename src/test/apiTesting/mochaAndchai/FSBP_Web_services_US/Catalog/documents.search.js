let chai = require("chai");
let chaiHttp = require("chai-http");
const assert = require("chai").assert;

chai.use(chaiHttp);

const url = "https://api-stage.firestonebpco.com";

describe("Check the FSBP API status code ", () => {
  it("should get and compare the status code", (done) => {
    chai
      .request(url)
      .get(
        "/solr/site_search/select?q=roof&fq=(country:us)&fq=(language:en)&fq=(type:assets)&rows=10&facet.field=documentType&facet=true"
      )
      .end(function (err, res) {
        console.log(res.body);
        console.log("The status code: ", res.statusCode);
        assert.equal(
          res.status,
          "200",
          "The status code is not the correct answer"
        );
        done();
      });
  });
});
