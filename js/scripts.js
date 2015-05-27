var palindrome = function(input) {
  var input = input;
  input = input.toLowerCase();
  var reverseInput = input.split("").reverse().join("");
  return input === reverseInput;
}

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    $(".verdict").empty();

    var input = $("input#input_text").val();
    var verdict = palindrome(input);

    if (!(verdict)) {
      $(".verdict").text("not");
    }
    
    $(".results").show();
    event.preventDefault();
  });
});
