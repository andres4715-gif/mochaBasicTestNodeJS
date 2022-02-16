let chai = require("chai");
let chaiHttp = require("chai-http");

const assert = require("chai").assert;

chai.use(chaiHttp);

const userId = 1
const baseUrl = "http://localhost:3000"
const endpont = `/users/${userId}`

const newUserDataInformation = {
    "last_name": "Pausiny Arteaga 2"
}

describe("Doing PUT method", () => {
    it("Updating user with PUT method", (done) => {
        chai
            .request(baseUrl)
            .patch(endpont)
            .send(newUserDataInformation)
            .end(function (err, res) {
                console.log("The status is: ", res.status);
                console.log("Updated: ", res.body);
                console.log("The new id is: ", res.body.id);
            })
        done();
    })
})
