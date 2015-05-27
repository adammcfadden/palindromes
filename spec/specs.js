describe('palindrome', function() {
  // it('will return a word, downcased and reversed', function() {
  //   var word = "Hello";
  //   expect(palindrome(word)).to.equal("olleh");
  // });

  it('will return true if the input word is a palindrome', function() {
    var word = "Racecar";
    expect(palindrome(word)).to.equal(true);
  });

  it('will return false if the input word is not a palindrome', function() {
    var word = "Rallycar";
    expect(palindrome(word)).to.equal(false);
  });

  it('will return true if a number is a palindrome', function() {
    var num = "12321";
    expect(palindrome(num)).to.equal(true);
  });

  it('will return false if a number is not a palindrome', function() {
    var num = "12345";
    expect(palindrome(num)).to.equal(false);
  });
});
