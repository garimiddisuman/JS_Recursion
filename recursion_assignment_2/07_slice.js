function _slice(start, end, string) {
  if (start > end) {
    return "";
  }

  return string[start] + _slice(start + 1, end, string);
}

function max(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function min(value1, value2) {
  return value1 > value2 ? value2 : value1;
}

function slice(text, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  return _slice(startIndex, endIndex, text);
}

/*   --------- Testing Section ---------------------   */
function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(text, start, end, expected, actual) {
  const textSegment = "|text:'" + text + "'\n";
  const startSegment = "  |start:" + start + "\n";
  const endSegment = "  |end:" + end + "\n";
  const expectedSegment = "  |expected:'" + expected + "'\n";
  const actualSegment = "  |actual:'" + actual + "'\n";
  const message = textSegment + startSegment + endSegment;

  return message + expectedSegment + actualSegment;
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, start, end, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testStringSlice('hello world', 0, 4, 'hello');
  testStringSlice('negative start', -1, 8, 'negative ');
  testStringSlice('', 0, 10, '');
  testStringSlice('   ', -10, 10, '   ');
  testStringSlice('abcdefghi', -10, 5, 'abcdef');
  testStringSlice('suman', 1, 3, 'uma');
}

testCases();