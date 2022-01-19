var Palindrome = require("./palindrome/palindrome.js");
var Palindrome3 = require("./palindrome/palindrome3.js");

describe("Practicing Palindrome", function () {
  it("Getting palindrome results", function () {
    console.log(Palindrome.palindromeTest());
    console.log(Palindrome3.palindromeTest3());
  });
});
