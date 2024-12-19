function _replacement(text, target, replacement, index, replacedString) {
  if (index === text.length) {
    return replacedString;
  }

  replacedString += text[index] === target ? replacement : text[index];
  return _replacement(text, target, replacement, index + 1, replacedString);
}

function replace(text, target, replacement) {
  return _replacement(text, target, replacement, 0, "");
}

/*   --------- Testing Section ---------------------   */
function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(text, target, replacement, expected, actual) {
  const textSegment = "|text:'" + text + "'\n";
  const targetSegment = "  |target:'" + target + "'\n";
  const replacementSegment = "  |replacement:'" + replacement + "'\n";
  const expectedSegment = "  |expected:'" + expected + "'\n";
  const actualSegment = "  |actual:'" + actual + "'\n";
  const message = textSegment + targetSegment + replacementSegment;

  return message + expectedSegment + actualSegment;
}

function testReplace(text, target, replacement, expected) {
  const actual = replace(text, target, replacement);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, target, replacement, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testReplace('hello world', "l", "z", 'hezzo worzd');
  testReplace('hello world', " ", "", 'helloworld');
  testReplace('negative start', " ", "-", 'negative-start');
  testReplace('', "a", "b", '');
  testReplace('   ', "a", "b", '   ');
  testReplace('   ', " ", "_", '___');
  testReplace('abcdef', "a", "z", 'zbcdef');
  testReplace('malayalam', "a", "z", 'mzlzyzlzm');
  testReplace('suman', "a", "", 'sumn');
}

testCases();