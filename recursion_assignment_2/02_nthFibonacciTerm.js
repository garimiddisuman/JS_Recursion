function nthFibonacciTerm(nth) {
  if (nth <= 1) {
    return 0;
  }

  if (nth === 2) {
    return 1;
  }

  return nthFibonacciTerm(nth - 1) + nthFibonacciTerm(nth - 2);
}

/*    ------------- Testing Section --------------------      */
function getMessage(nth, expected, actual) {
  const message = nth + " term of fibannacci should be " + expected;

  return message + " and is " + actual;
}

function testNthFibonacci(nth, expected) {
  const actual = nthFibonacciTerm(nth);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(nth, expected, actual);

  console.log(status + " " + content);
}

function testCases() {
  testNthFibonacci(0, 0);
  testNthFibonacci(1, 0);
  testNthFibonacci(2, 1);
  testNthFibonacci(3, 1);
  testNthFibonacci(4, 2);
  testNthFibonacci(6, 5);
  testNthFibonacci(8, 13);
  testNthFibonacci(13, 144);
}

testCases();