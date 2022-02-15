let Users = require("../../../../../helpers/data/fsbpUserAuthentication.json")

const assert = require("chai").assert;
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

const baseUrl = "https://api-stage.firestonebpco.com";
const endpoint = "/fsbp/api/authenticate";

describe("Check authentication FSBP process", () => {
    it("Should be able to get the app authentication", (done) => {
        for (let i = 0; i < Users.users.length; i++) {
            chai
                .request(baseUrl)
                .post(endpoint)
                .send(Users.users[i])
                .end(function (err, res) {
                    console.log(res.body);
                    assert.isNotNull(res.body.sub, 'Check (sub) shoukd not be null value');
                    assert.isBoolean(res.body.emailVerified, 'Check emailVerified should be boolean');
                    assert.isFalse(res.body.phoneNumVerified, 'Check phoneNumVerified should be false');
                })
        }
        done();
    })
})
