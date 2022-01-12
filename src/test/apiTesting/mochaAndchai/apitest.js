let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const assert = require("chai").assert;

chai.use(chaiHttp);

const idList = [];

const url = "https://reqres.in/api/";

describe("Check the API status code ", () => {
  it("should get and compare the status code", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        console.log(res.body);
        console.log("The status code: ", res.statusCode);
        expect(res.status === 200).to.be.true;
        expect(res).to.have.status(200);
        assert.equal(
          res.status,
          "200",
          "== The status code is not the correct answer"
        );
        done();
      });
  });

  it("should be able to check if page is a number and > than 0", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        assert.isTrue(res.body.page > 0, "Page is a number but it is not > 0");
        assert.isNumber(res.body.page, "Page is not a number");
        done();
      });
  });

  it("should be able to check if per_page is a number and > than 0", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        assert.isTrue(
          res.body.per_page > 0,
          "Page is a number but it is not > 0"
        );
        assert.isNumber(res.body.per_page, "Page is not a number");
        done();
      });
  });

  it("should be able to check if total is a number and > than 0", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        assert.isTrue(res.body.total > 0, "Page is a number but it is not > 0");
        assert.isNumber(res.body.total, "Page is not a number");
        done();
      });
  });

  it("should be able to check if total pages is a number and > than 0", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        assert.isTrue(
          res.body.total_pages > 0,
          "Page is a number but it is not > 0"
        );
        assert.isNumber(res.body.total_pages, "Page is not a number");
        done();
      });
  });

  it("should be able to check each id from json file way 1", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          idList.push(res.body.data[i].id);
          assert.isFalse(
            isNaN(!idList[i], "Check the id... it is not a number")
          );
        }
        done();
      });
  });

  it("should be able to check each (id) from json file way 2", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          idList.push(res.body.data[i].id);
          assert.isTrue(
            typeof idList[i] === "number",
            "Check the id... it is not a number"
          );
        }
        done();
      });
  });
});
