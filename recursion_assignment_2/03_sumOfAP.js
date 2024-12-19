function sumOfAP(firstTerm, differ, noOfTerms) {
  if (noOfTerms < 1) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + differ, differ, noOfTerms - 1);
}

/*  ----------------- Testing Section -------------------    */
function makeMessage(firstTerm, differ, noOfTerms, expected, actual) {
  const message = "|a:" + firstTerm + " d:" + differ + " n:" + noOfTerms;

  return message + "\n  |expected:" + expected + "\n  |actual:" + actual;
}

function testSumOfAP(firstTerm, differ, noOfTerms, expected) {
  const actual = sumOfAP(firstTerm, differ, noOfTerms);
  const status = actual === expected ? "✅" : "❌";
  const message = makeMessage(firstTerm, differ, noOfTerms, expected, actual);

  console.log(status + message + "\n");
}

function testCases() {
  testSumOfAP(1, 1, 10, 55);
  testSumOfAP(4, 2, 20, 460);
  testSumOfAP(6, 5, 2, 17);
  testSumOfAP(8, 13, 0, 0);
  testSumOfAP(8, 0, 4, 32);
  testSumOfAP(-1, -1, 4, -10);
  testSumOfAP(-1, -1, -1, 0);
}

testCases();