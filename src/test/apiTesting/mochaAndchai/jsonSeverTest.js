let jsonDataFile = require("../../../helpers/data/newUsers.json");

let chai = require("chai");
let chaiHttp = require("chai-http");
const assert = require("chai").assert;

chai.use(chaiHttp);

const url = "http://localhost:3000"
const endpont = "/users"

let ids = [];

describe("check user json server", () => {
    it("should get and compare the status code", (done) => {
        chai
            .request(url)
            .get(endpont)
            .end(function (err, res) {
                console.log("The status is: ", res.status);
                console.log("The body is: ", res.body);
                console.log("The id is: ", res.body[0].id);
                for (let i = 0; i < res.body.length; i++) {
                    ids.push(res.body[i].id);
                    assert.typeOf(ids[i], 'number', 'check, it is not a number');
                    assert.isNotNull(ids[i], "Check the id should not be null value");
                }
                console.log(ids);
            })
        done();
    })

    it("should create one or more new user or users", (done) => {
        for (let i = 0; i < jsonDataFile.users.length; i++) {
            chai
                .request(url)
                .post(endpont)
                .send(jsonDataFile.users[i])
                .end(function (err, res) {
                    console.log("Response", res.body);
                    assert.isNotNull(ids[i], "Check the id should not be null value");
                    assert.typeOf(ids[i], 'number', 'check, it is not a number');
                })
        }
        done();
    })
})
