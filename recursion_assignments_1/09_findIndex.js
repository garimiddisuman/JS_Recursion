function _findIndex(string, target, index) {
  if (index === string.length) {
    return -1;
  }

  const isMatching = string[index] === target;
  return isMatching ? index : _findIndex(string, target, index + 1);
}

function findIndex(string, char) {
  if (char === "") {
    return -1;
  }

  return _findIndex(string, char, 0);
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
  const actual = findIndex(text, target);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, target, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testFindIndex("thoughtworks", "o", 2);
  testFindIndex("", "", -1);
  testFindIndex("suman", "z", -1);
  testFindIndex("iiiiiii", "i", 0);
  testFindIndex("", "a", -1);
}

testCases();