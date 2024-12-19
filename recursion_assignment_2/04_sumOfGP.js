function sumOfGP(currentTerm, ratio, noOfTerms) {
  if (noOfTerms < 1) {
    return 0;
  }

  return currentTerm + sumOfGP(currentTerm * ratio, ratio, noOfTerms - 1);
}

/*    ------------- Testing Section ---------------      */
function makeMessage(currentTerm, ratio, noOfTerms, expected, actual) {
  const message = "|a:" + currentTerm + " r:" + ratio + " n:" + noOfTerms;

  return message + "\n  |expected:" + expected + "\n  |actual:" + actual;
}

function testSumOfGP(currentTerm, ratio, noOfTerms, expected) {
  const actual = sumOfGP(currentTerm, ratio, noOfTerms);
  const status = actual === expected ? "✅" : "❌";
  const message = makeMessage(currentTerm, ratio, noOfTerms, expected, actual);

  console.log(status + message + "\n");
}

function testCases() {
  testSumOfGP(111, 11, -1, 0);
  testSumOfGP(-10, -2, -1, 0);
  testSumOfGP(-10, -2, 0, 0);
  testSumOfGP(2, 2, 3, 14);
  testSumOfGP(2, 1, 3, 6);
  testSumOfGP(10, 0, 5, 10);
  testSumOfGP(0, 0, 3, 0);
  testSumOfGP(9, 2, 4, 135);
}

testCases();