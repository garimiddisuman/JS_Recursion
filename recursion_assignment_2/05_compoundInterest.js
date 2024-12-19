function compoundInterest(priciple, interestRate, time) {
  if (priciple === 0 || time === 0) {
    return 0;
  }

  const SI = (priciple * interestRate) / 100;
  return SI + compoundInterest(priciple + SI, interestRate, time - 1);
}

/*   ------------- Testing Section ---------------    */
function makeMessage(principle, rate, time, expected, actual) {
  const message = "|p:" + principle + " r:" + rate + " t:" + time;

  return message + "\n  |expected:" + expected + "\n  |actual:" + actual;
}

function testCompoundInterest(principle, rate, time, expected) {
  const actual = compoundInterest(principle, rate, time);
  const status = actual === expected ? "✅" : "❌";
  const message = makeMessage(principle, rate, time, expected, actual);

  console.log(status + message + "\n");
}

function testCases() {
  testCompoundInterest(1000, 5, 2, 102.5);
  testCompoundInterest(100, 0.01, 1, 0.01);
  testCompoundInterest(100, 5, 1, 5);
  testCompoundInterest(10400, 3, 0, 0);
  testCompoundInterest(10, 0, 2, 0);
  testCompoundInterest(0, 5, 2, 0);
}

testCases();