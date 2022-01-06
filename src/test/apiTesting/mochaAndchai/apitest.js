let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);

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
        done();
      });
  });
});
