function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
    return "";
  }

  return string + repeat(string, noOfTimes - 1);
}

/*    ------------ Testing Section -----------------     */
function testRepeat(string, noOfTimes, expected) {
  const actual = repeat(string, noOfTimes);
  const status = actual === expected ? "✅" : "❌";
  const content = "|string  :'" + string + "'\n  |expected:'" + expected;

  console.log(status + content + "'\n  |actual  :'" + actual + "'\n");
}

function testAll() {
  testRepeat("", 100, "");
  testRepeat("s", 5, "sssss");
  testRepeat("ab", 2, "abab");
  testRepeat("ab", 0, "");
}

testAll();