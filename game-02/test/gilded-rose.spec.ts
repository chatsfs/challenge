const assert = require("assert");
const { expect } = require("chai");
const { GildedRose, Item } = require("../app/gilded-rose");

function assertItemEq(actual, expected) {
  expect(actual.name).to.be.eq(expected.name);
  expect(actual.sellIn).to.be.eq(expected.sellIn);
  expect(actual.quality).to.be.eq(expected.quality);
}

describe("Sulfuras tests", () => {
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
});

describe("Aged brie tests", () => {
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
});

describe("Backstage passes tests", () => {
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
});

describe("Conjured items tests", () => {
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
  it("Sulfuras inmutable", () => {
    const result = GildedRose.updateQuality();
    // assert.equal(result, 5);
    expect(result).to.be.eq(4);
  });
});
