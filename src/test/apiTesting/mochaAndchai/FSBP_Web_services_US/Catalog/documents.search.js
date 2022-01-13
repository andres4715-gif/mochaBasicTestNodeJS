let chai = require("chai");
let chaiHttp = require("chai-http");
const assert = require("chai").assert;

chai.use(chaiHttp);

const ids = [];
const title = [];
const sortingTitle = [];
const tags = [];

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

  it("should get the response and compare de element", (done) => {
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
            "Check the numFound, it is not a number value"
          );
          assert.isNotNull(response[i], "Check the numFound must not be null");
          assert.isTrue(response[i] >= 0);
        }
        done();
      });
  });

  it("should get the response docs (object) and compare de element object", (done) => {
    chai
      .request(url)
      .get(endPoint)
      .query(params)
      .end(function (err, res) {
        for (let i = 0; i < res.body.response.docs.length; i++) {
          ids.push(res.body.response.docs[i].id);
          title.push(res.body.response.docs[i].title);
          sortingTitle.push(res.body.response.docs[i].sortingTitle);
          tags.push(...res.body.response.docs[i].tags);

          // Asserts
          assert.isNotNull(ids[i], "Check the id must not be null");
          assert.include(ids[i], "/content/dam/fsbp/migrated-document");
          assert.typeOf(ids[i], "string", "id, it is not a string");
          assert.isNotNull(title[i], "title must not be null");
          assert.typeOf(title[i], "string", "title, it is not a string");
          assert.isNotNull(sortingTitle[i], "sortingTitle must not be null");
          assert.typeOf(sortingTitle[i], "string", "sortingTitle is't string");
          assert.typeOf(tags[i], "string", "tags, it is not a string");
          assert.include(tags[i], "firestone-");
        }
        done();
      });
  });
});
