function _quotient(dividend, divisor, count) {
  if (dividend < divisor) {
    return count;
  }
  
  count += 1;
  return _quotient(dividend - divisor, divisor, count);
}

function quotient(dividend, divisor) {
  if (divisor === 0) {
    return Infinity;
  }

  return _quotient(dividend, divisor, 0);
}

// ------------- Testing Section --------------
function makeMessage(dividend, divisor, expected, actual) {
  const dividendSegment = "|dividend:" + dividend;
  const divisorSegment = "\n  |divisor:" + divisor;
  const expectedSegment = "\n  |expected:" + expected;
  const message = dividendSegment + divisorSegment + expectedSegment;

  return message + "\n  |actual:" + actual;
}

function testQuotient(dividend, divisor, expected) {
  const actual = quotient(dividend, divisor);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(dividend, divisor, expected, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testQuotient(3, 6, 0);
  testQuotient(6, 6, 1);
  testQuotient(3, 1, 3);
  testQuotient(10, 2, 5);
  testQuotient(100, 10, 10);
  testQuotient(144, 12, 12);
  testQuotient(0, 10, 0);
  testQuotient(10, 0, Infinity);
}

testAll();