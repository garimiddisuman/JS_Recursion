function _findLastIndex(string, target, lastIndex) {
  if (lastIndex < 0) {
    return -1;
  }

  const isMatching = string[lastIndex] === target;
  return isMatching ? lastIndex : _findLastIndex(string, target, lastIndex - 1);
}

function findLastIndex(string, char) {
  if (char === "") {
    return -1;
  }

  return _findLastIndex(string, char, string.length - 1);
}


// ----------- Testing Section --------------
function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(text, target, expected, actual) {
  const textSegment = "|text:'" + text + "'\n";
  const targetSegment = "  |target:'" + target + "'\n";
  const expectedSegment = "  |expected:" + expected + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const message = textSegment + targetSegment + expectedSegment;

  return message + actualSegment;
}

function testFindIndex(text, target, expected) {
  const actual = findLastIndex(text, target);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, target, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testFindIndex("thoughtworks", "o", 8);
  testFindIndex("", "", -1);
  testFindIndex("suman", "z", -1);
  testFindIndex("iiiiiii", "i", 6);
  testFindIndex("", "a", -1);
  testFindIndex("malayalam", "a", 7);
}

testCases();