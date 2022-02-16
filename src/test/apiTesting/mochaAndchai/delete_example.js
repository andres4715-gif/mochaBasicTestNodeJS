let chai = require("chai");
let chaiHttp = require("chai-http");

const assert = require("chai").assert;

chai.use(chaiHttp);

const userId = 1
const baseUrl = "http://localhost:3000"
const endpont = `/users/${userId}`

describe("Doing delete method", () => {
    it("Updating user with DELETE method", (done) => {
        chai
            .request(baseUrl)
            .delete(endpont)
            .end(function (err, res) {
                console.log("The status is: ", res.status);
                assert.equal(res.status, 200, 'The status code should be 200');
            })
        done();
    })
})
