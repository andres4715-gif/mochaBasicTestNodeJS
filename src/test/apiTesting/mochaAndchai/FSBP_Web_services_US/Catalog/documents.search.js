let chai = require("chai");
let chaiHttp = require("chai-http");
const assert = require("chai").assert;

chai.use(chaiHttp);

const params = {
  q: "roof",
  "facet.field": "documentType",
  fq: ["(country:us)", "(language:en)", "(type:assets)"],
  rows: "10",
  facet: "true",
};

const url = "https://api-stage.firestonebpco.com";
const endPoint = "/solr/site_search/select";

describe("GET FSBP API response for Document Search  ", () => {
  it("should get and compare the status code", (done) => {
    chai
      .request(url)
      .get(endPoint)
      .query(params)
      .end(function (err, res) {
        assert.equal(
          res.status,
          "200",
          "The status code is not the correct answer"
        );
        done();
      });
  });

  it("should get the response and compare de element object", (done) => {
    chai
      .request(url)
      .get(endPoint)
      .query(params)
      .end(function (err, res) {
        const response = [
          res.body.response.numFound,
          res.body.response.start,
          res.body.response.maxScore,
        ];

        for (let i = 0; i < response.length; i++) {
          assert.typeOf(
            response[i],
            "number",
            "Check the numFound it is not a number value"
          );
          assert.isNotNull(response[i], "Check the numFound must not be null");
          assert.isTrue(response[i] >= 0);
        }
        done();
      });
  });
});
