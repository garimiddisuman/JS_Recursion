function _stringToNumber(string, index, number) {
  if (index === string.length) {
    return string[0] === "-" ? -1 * number : number;
  }

  number = (number * 10) + +string[index];
  return _stringToNumber(string, index + 1, number);
}

function stringToNumber(string) {
  if (string === "") {
    return NaN;
  }

  const index = string[0] === "-" || string[0] === "+" ? 1 : 0;
  return _stringToNumber(string, index, 0);
}

/* ------------ Testing Section -----------------  */
function testStringToNumber(number, expected) {
  const actual = stringToNumber(number);
  const status = actual === expected ? "✅" : "❌";
  const content = "|string:'" + number + "'\n  |expected:" + expected;

  console.log(status + content + "\n  |actual:" + actual + "\n");
}

function testAll() {
  testStringToNumber("1234", 1234);
  testStringToNumber("+1234", 1234);
  testStringToNumber("-12", -12);
  testStringToNumber("01234", 1234);
  testStringToNumber("", NaN);
  testStringToNumber("0", 0);
  testStringToNumber("012a", NaN);
}

testAll();