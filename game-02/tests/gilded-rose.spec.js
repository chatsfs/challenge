"use strict";
var assert = require("assert");
var expect = require("chai").expect;
var _a = require("../app/gilded-rose"), GildedRose = _a.GildedRose, Item = _a.Item, Names = _a.Names;
function assertItemEq(actual, expected) {
    expect(actual.name).to.be.eq(expected.name);
    expect(actual.sellIn).to.be.eq(expected.sellIn);
    expect(actual.quality).to.be.eq(expected.quality);
}
describe("Sulfuras tests", function () {
    it("Sulfuras inmutable", function () {
        var gildedRose = new GildedRose([new Item(Names.SULFURAS, 20, 80)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.SULFURAS, 20, 80));
    });
});
describe("Brie tests", function () {
    it("Increase quality by getting older", function () {
        var gildedRose = new GildedRose([new Item(Names.BRIE, 20, 40)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BRIE, 19, 41));
    });
    it("Increase quality faster when expirated", function () {
        var gildedRose = new GildedRose([new Item(Names.BRIE, -1, 32)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BRIE, -2, 34));
    });
});
describe("Backstage tests", function () {
    it("Increase quality by getting near the date", function () {
        var gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 20, 40)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, 19, 41));
    });
    it("Increase quality faster 10 days or less", function () {
        var gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 9, 32)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, 8, 34));
    });
    it("Increase quality faster 5 days or less", function () {
        var gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 4, 32)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, 3, 35));
    });
    it("Quality drop to 0", function () {
        var gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 0, 32)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, -1, 0));
    });
    it("Quality remains in 0", function () {
        var gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, -1, 0)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, -2, 0));
    });
});
describe("Conjured tests", function () {
    it("Decrease quality by getting older", function () {
        var gildedRose = new GildedRose([new Item(Names.CONJURED, 20, 40)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.CONJURED, 19, 38));
    });
    it("Decrease quality faster when expirated", function () {
        var gildedRose = new GildedRose([new Item(Names.CONJURED, -1, 32)]);
        gildedRose.updateQuality();
        assertItemEq(gildedRose.items[0], new Item(Names.CONJURED, -2, 28));
    });
});
