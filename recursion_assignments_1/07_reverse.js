function reverseString(string, lastIndex) {
  if (lastIndex === 0) {
    return string[lastIndex];
  }

  return string[lastIndex] + reverseString(string, lastIndex - 1);
}

function reverse(string) {
  if (string === "") {
    return "";
  }

  return reverseString(string, string.length - 1);
}

// ------------- Testing Section --------------
function makeMessage(string, expected, actual) {
  const stringSegment = "|string:'" + string;
  const expectedSegment = "'\n  |expected:'" + expected;
  const message = stringSegment + expectedSegment;

  return message + "'\n  |actual:'" + actual + "'";
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(string, expected, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testReverse("aa", "aa");
  testReverse("suman", "namus");
  testReverse("malayalam", "malayalam");
  testReverse("", "");
  testReverse("  ", "  ");
}

testAll();