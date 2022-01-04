var superHeroJsonFile = require("../test/jsonTest/superHeroJson");
var assert = require("chai").assert;

let superHeroName = "Robin/Nightwing";

describe("Cheking super Hero", function () {
  it("checking the Marvel and DC comics Super hero", function () {
    const resutl = superHeroJsonFile.checkIfSuperHeroExist(superHeroName);
    assert.isTrue(
      resutl,
      `In this list doesn't exit the ${superHeroName} super hero!!!`
    );
  });
});
