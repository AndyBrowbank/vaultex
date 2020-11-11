const { validate } = require("./validate");
const { expect } = require("chai");

describe("validate", () => {
  test("should return no Cassettes error when empty order given", () => {
    const order = [];
    const actual = validate(order);
    const expected = ["error", "order contains no cassettes"];
    expect(actual).to.eql(expected);
  });
  test("should return invalid order format", () => {
    const order = [
      ["cassettes", 4],
      ["5", "unexpected string"],
      ["10", 10000],
      ["20", 10000],
      ["50", 10000],
    ];
    const actual = validate(order);
    const expected = ["error", "invalid entry, integer required"];
    expect(actual).to.eql(expected);
  });
  test("should return invalid note error", () => {
    const order = [
      ["cassettes", 4],
      ["6", 10000],
      ["10", 10000],
      ["20", 10000],
      ["50", 10000],
    ];
    const actual = validate(order);
    const expected = ["error", "a £6 note does not exist"];
    expect(actual).to.eql(expected);
  });
  test("should return cash value too low error", () => {
    const order = [
      ["cassettes", 4],
      ["5", 100],
      ["10", 100],
      ["20", 400],
      ["50", 1000],
    ];
    const actual = validate(order);
    const expected = ["error", "cash value too low"];
    expect(actual).to.eql(expected);
  });
  test("should return unexpected number of cassettes error", () => {
    const order = [
      ["cassettes", 3],
      ["5", 10000],
      ["10", 20000],
      ["20", 40000],
      ["50", 100000],
    ];
    const actual = validate(order);
    const expected = [
      "error",
      "order requires 4 cassettes but was expecting 3 cassettes",
    ];
    expect(actual).to.eql(expected);
  });
  test("should return valid order message", () => {
    const order1 = [
      ["cassettes", 4],
      ["5", 10000],
      ["10", 20000],
      ["20", 40000],
      ["50", 100000],
    ];
    const order2 = [
      ["cassettes", 4],
      ["5", 10000],
      ["10", 20000],
      ["20", 40000],
      ["20", 40000],
    ];
    const actual1 = validate(order1);
    const actual2 = validate(order2);
    const expected = ["valid", "Order valid, sent for packing"];
    expect(actual1).to.eql(expected);
    expect(actual2).to.eql(expected);
  });
});
