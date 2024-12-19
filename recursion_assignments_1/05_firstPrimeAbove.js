function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function _isPrime(candidate, divisor) {
  if (divisor === candidate) {
    return true;
  }

  if (isDivisible(candidate, divisor)) {
    return false;
  }

  return _isPrime(candidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return _isPrime(primeCandidate, 2);
}

function firstPrimeAbove(number) {
  if (!isPrime(number + 1)) {
    return firstPrimeAbove(number + 1);
  }

  return number + 1;
}

// ------------- Testing Section --------------
function makeMessage(primeCandidate, expected, actual) {
  const message = "first prime above of " + primeCandidate + " should be ";

  return message + expected + " and is " + actual;
}

function testFirstPrimeAbove(primeCandidate, expected) {
  const actual = firstPrimeAbove(primeCandidate);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(primeCandidate, expected, actual);

  console.log(status, content);
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(12, 13);
  testFirstPrimeAbove(97, 101);
  testFirstPrimeAbove(90, 97);
}

testAll();