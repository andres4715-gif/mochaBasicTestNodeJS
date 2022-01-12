let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const assert = require("chai").assert;

chai.use(chaiHttp);

const idList = [];
const emailList = [];
const firstNameList = [];
const lastNameList = [];
const avatarList = [];

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

  it("should be able to check each (id) from json file way 1", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          idList.push(res.body.data[i].id);
          assert.isNumber(idList[i], "Check why the id is not a number");
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
          assert.isNumber(idList[i], "Check why the id is not a number");
          assert.isTrue(
            typeof idList[i] === "number",
            "Check the id... it is not a number"
          );
        }
        done();
      });
  });

  it("should be able to check each (email) from json file that include (@) ", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          emailList.push(res.body.data[i].email);
          assert.isString(
            emailList[i],
            "Check why the e-mail is not formatted correctly"
          );
          assert.include(
            emailList[i],
            "@",
            "check why the e-mail does not have an @ character"
          );
          assert.isNotNull(emailList[i], "Check why the e-mail is null");
        }
        done();
      });
  });

  it("should be able to check each (first Name) from json file that it is not a null value and is a string", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          firstNameList.push(res.body.data[i].first_name);
          assert.isString(
            firstNameList[i],
            "Check why first_name is not a string"
          );
          assert.isNotNull(
            firstNameList[i],
            "Check why the first_name is a null value"
          );
        }
        done();
      });
  });

  it("should be able to check each (Last Name) from json file that it is not a null value and is a string", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          lastNameList.push(res.body.data[i].last_name);
          assert.isString(
            lastNameList[i],
            "Check why first_name is not a string"
          );
          assert.isNotNull(
            lastNameList[i],
            "Check why the last_name is a null value"
          );
        }
        done();
      });
  });

  it("should be able to check each (avatar) from json file that it is not a null value and is a string", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        for (let i = 0; i < res.body.data.length; i++) {
          avatarList.push(res.body.data[i].avatar);
          assert.isString(avatarList[i], "Check why avatar is not a string");
          assert.isNotNull(
            avatarList[i],
            "Check why the avatar is a null value"
          );
          assert.include(
            avatarList[i],
            "https://",
            "Check why the avatar not include https://"
          );
        }
        done();
      });
  });

  it("should be able to check if support is not a null value and is a string", (done) => {
    chai
      .request(url)
      .get("users?page=1")
      .end(function (err, res) {
        assert.isObject(
          res.body.support,
          "Check why the support value is not an object"
        );
        assert.isString(
          res.body.support.url,
          "Check why the support.url is not a string"
        );
        assert.include(res.body.support.url, "https://");
        assert.isNotNull(
          res.body.support.url,
          "Check why the support.url is a null value"
        );
        assert.isString(
          res.body.support.text,
          "Check why the support.text is not a string"
        );
        assert.isNotNull(
          res.body.support.text,
          "Check why the support.text is a null value"
        );

        done();
      });
  });
});
