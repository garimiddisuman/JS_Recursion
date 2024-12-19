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

// ------------- Testing Section --------------
function makeMessage(primeCandidate, actual) {
  const isPrimeOrNot = actual ? " is '" : " is 'not ";

  return primeCandidate + isPrimeOrNot + "prime'";
}

function testIsPrime(primeCandidate, expected) {
  const actual = isPrime(primeCandidate);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(primeCandidate, actual);

  console.log(status, content);
}

function testAll() {
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(4, false);
  testIsPrime(5, true);
  testIsPrime(12, false);
  testIsPrime(97, true);
}

testAll();