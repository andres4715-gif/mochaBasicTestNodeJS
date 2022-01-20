var Palindrome = require("./palindrome/palindrome.js");
var Palindrome3 = require("./palindrome/palindrome3.js");
var Palindrome4 = require("./palindrome/palindrome4");

describe("Practicing Palindrome", function () {
  it("Getting palindrome results", function () {
    console.log(Palindrome.palindromeTest());
    console.log(Palindrome3.palindromeTest3());
    console.log(Palindrome4.Palindrome4("123329"));
  });
});
