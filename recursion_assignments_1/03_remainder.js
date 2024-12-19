function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

// ------------- Testing Section --------------
function makeMessage(dividend, divisor, expected, actual) {
  const dividendSegment = "|dividend:" + dividend;
  const divisorSegment = "\n  |divisor:" + divisor;
  const expectedSegment = "\n  |expected:" + expected;
  const message = dividendSegment + divisorSegment + expectedSegment;

  return message + "\n  |actual:" + actual;
}

function testRemiander(dividend, divisor, expected) {
  const actual = remainder(dividend, divisor);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(dividend, divisor, expected, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testRemiander(5, 3, 2);
  testRemiander(6, 3, 0);
  testRemiander(5, 10, 5);
  testRemiander(0, 5, 0);
}

testAll();