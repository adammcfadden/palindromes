var palindrome = function(input) {
  var input = input;
  input = input.toLowerCase();
  var reverseInput = input.split("").reverse().join("");
  return input === reverseInput;
}
