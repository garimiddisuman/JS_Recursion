function _isPalindrome(string, startIndex, lastIndex) {
  if (startIndex > lastIndex) {
    return true;
  }

  if (string[startIndex] === string[lastIndex]) {
    return _isPalindrome(string, startIndex + 1, lastIndex - 1);
  }

  return false;
}

function isPalindrome(palindromeCandidate) {
  const string = palindromeCandidate;

  return _isPalindrome(string, 0, string.length - 1);
}

// ------------- Testing Section --------------
function makeMessage(string, expected, actual) {
  const stringSegment = "|string:'" + string;
  const expectedSegment = "'\n  |expected:" + expected;
  const message = stringSegment + expectedSegment;

  return message + "\n  |actual:" + actual;
}

function testIsPalindrome(string, expected) {
  const actual = isPalindrome(string);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(string, expected, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testIsPalindrome("aa", true);
  testIsPalindrome("suman", false);
  testIsPalindrome("malayalam", true);
  testIsPalindrome("", true);
  testIsPalindrome("  ", true);
  testIsPalindrome("sumus", true);
}

testAll();