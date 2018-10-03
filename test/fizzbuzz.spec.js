var target = require("../src/fizzbuzz");
var assert = require("assert");


describe("fizzbuzz", () => {
  describe("checkFizz()", () => {
    it("3で割り切れる場合、trueを返す", async () => {
      const result = await target.checkFizz(3);
      assert.equal(true, result);
    });
  });
});

describe("fizzbuzz", () => {
  describe("checkFizz()", () => {
    it("3で割り切れない場合、falseを返す", async () => {
      const result = await target.checkFizz(4);
      assert.equal(false, result);
    });
  });
});

describe("fizzbuzz", () => {
  describe("checkBuzz()", () => {
    it("5で割り切れる場合、trueを返す", async () => {
      const result = await target.checkBuzz(5);
      assert.equal(true, result);
    });
  });
});

describe("fizzbuzz", () => {
  describe("checkBuzz()", () => {
    it("5で割り切れない場合、falseを返す", async () => {
      const result = await target.checkBuzz(6);
      assert.equal(false, result);
    });
  });
});

describe("fizzbuzz", function () {
  describe("checkFizzBuzz()", function () {
    it("15で割り切れる場合、trueを返す", async function () {
      const result = await target.checkFizzBuzz(15);
      assert.equal(true, result);
    });
  });
});

describe("fizzbuzz", function () {
  describe("checkFizzBuzz()", function () {
    it("15で割り切れない場合、falseを返す", async () => {
      const result = await target.checkFizzBuzz(16);
      assert.equal(false, result);
    });
  });
});