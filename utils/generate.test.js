const { generateRandomNumber } = require("./generate");

test("Test random number generation", () => {
  expect(generateRandomNumber()).toBeDefined();
});
