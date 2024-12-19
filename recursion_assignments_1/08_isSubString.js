function hasSubStringOccured(Index, subString, string, subStringIndex) {
  if (subStringIndex === subString.length) {
    return true;
  }

  if (string[Index + subStringIndex] !== subString[subStringIndex]) {
    return false;
  }

  return hasSubStringOccured(Index, subString, string, subStringIndex + 1);
}

function isOtherStringMatching(string, subString, index) {
  if (index === string.length) {
    return false;
  }

  if (hasSubStringOccured(index, subString, string, 0)) {
    return true;
  }

  return isOtherStringMatching(string, subString, index + 1);
}

function isSubString(string, otherString) {
  if (otherString === "") {
    return false;
  }

  return isOtherStringMatching(string, otherString, 0);
}

// ------------- Testing Section --------------
function getMark(actual, expect) {
  return actual === expect ? "✅" : "❌";
}

function makeMessage(string, subString, expect, actual) {
  const stringSegment = "|string:'" + string + "'\n";
  const subStringSegment = "  |subString:'" + subString + "'\n";
  const expectedSegment = "  |expected:" + expect + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const message = stringSegment + subStringSegment + expectedSegment;

  return message + actualSegment;
}

function testIsSubstring(string, subString, expect) {
  const actual = isSubString(string, subString);
  const mark = getMark(actual, expect);
  const content = makeMessage(string, subString, expect, actual);

  console.log(mark + content);
}

function testCases() {
  testIsSubstring("suman", "man", true);
  testIsSubstring("thoughtworks", "works", true);
  testIsSubstring("suman", "", false);
  testIsSubstring("", "man", false);
  testIsSubstring("wwoworworkworks", "works", true);
  testIsSubstring("", "", false);
  testIsSubstring("not found", "for", false);
  testIsSubstring("nononon", "no", true);
}

testCases();