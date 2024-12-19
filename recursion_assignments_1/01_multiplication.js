function multiply(multiplier, multiplicand) {
  if (multiplicand === 0) {
    return 0;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
}

// ------------- Testing Section --------------
function makeMessage(multiplier, multiplicand, actual) {
  const message = "multiplier:" + multiplier + "  multiplicand:";

  return message + multiplicand + "\n  actual:" + actual;
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(multiplier, multiplicand, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testMultiply(3, 6, 18);
  testMultiply(0, 6, 0);
  testMultiply(3, 0, 0);
  testMultiply(2, 2, 4);
  testMultiply(12, 12, 144);
  testMultiply(0, 0, 0);
}

testAll();