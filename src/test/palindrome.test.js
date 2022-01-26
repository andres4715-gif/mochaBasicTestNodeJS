var Palindrome = require("./palindrome/palindrome.js");
var Palindrome3 = require("./palindrome/palindrome3.js");
var Palindrome4 = require("./palindrome/palindrome4");
var Palindrome5 = require("./palindrome/palindrome5");
var Palindrome6 = require("./palindrome/palindrome6");
var Palindrome7 = require("./palindrome/palindrome7");

describe("Practicing Palindrome", function () {
  it("Getting palindrome results", function () {
    console.log("P1: ", Palindrome.palindromeTest());
    console.log("P3: ", Palindrome3.palindromeTest3());
    console.log("P4: ", Palindrome4.Palindrome4("123329"));
    console.log("P5: ", Palindrome5.checkPalindrome5("123321"));
    console.log("P6: ", Palindrome6.checkPalindrome6("123321"));
    console.log("P7: ", Palindrome7.checkingPalindrome7("andresserdna"));
  });
});
