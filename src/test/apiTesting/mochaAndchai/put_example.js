let chai = require("chai");
let chaiHttp = require("chai-http");

const assert = require("chai").assert;

chai.use(chaiHttp);

const baseUrl = "http://localhost:3000"
const userId = 1
const endpont = `/users/${userId}`

const newUserDataInformation = {
    "id": 1,
    "first_name": "Laura",
    "last_name": "Pausiny",
    "email": "laura@gmail.com"
}

describe("Doing PUT method", () => {
    it("Updating user with PUT method", (done) => {
        chai
            .request(baseUrl)
            .put(endpont)
            .send(newUserDataInformation)
            .end(function (err, res) {
                console.log("The status is: ", res.status);
                console.log("Updated: ", res.body);
                console.log("The new id is: ", res.body.id);
                assert.equal(res.body.id, 1, 'The id is not correct after updating');
                assert.equal(res.body.first_name, 'Laura', 'The name is not correct after updating');
                assert.equal(res.body.last_name, 'Pausiny', 'The lastname is not correct after updating');
                assert.equal(res.body.email, 'laura@gmail.com', 'The email is not correct after updating');
            })
        done();
    })

})