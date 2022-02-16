let token = require("../../../helpers/data/tokens.json")

const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = require("chai").assert;

chai.use(chaiHttp);

let repositories = [];

let baseUrl = "https://api.github.com"
let endpoint = "/user/repos"

describe("Check the git hub api with authentication token", () => {
    it("Should be able to check the git hub repositories with authorization token", done => {
        chai
            .request(baseUrl)
            .get(endpoint)
            .auth(token.gitHubToken)
            .end(function (err, res) {
                for (let i = 0; i < res.body.length; i++) {
                    repositories.push(res.body[i].name)
                }
                console.log("The status is:", res.status);
                console.log("The repositorie list is:", res.body.length);
                console.log("Repositories list: ", repositories);
                assert.isNotEmpty(repositories);
            })
        done();
    })
})
