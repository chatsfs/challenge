import { Item } from "./Item.class";
import { BaseItems } from "./base.abstract";

export enum Names {
  BRIE = "Aged Brie",
  BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured mana bun",
}

enum LimitsRoseQuality {
  MAX = 50,
  MIN = 0,
}
interface IGildedRose {
  validateChangeQuality: (item: Item, delta: number) => void;
  changeBackstageQuality: (item: Item, changeRate: number) => void;
  getChangeRate: (item: Item, isExpired: boolean) => void;
}
export class GildedRose extends BaseItems implements IGildedRose {
  validateChangeQuality = (item: Item, delta: number) => {
    if (item.quality + delta >= LimitsRoseQuality.MAX)
      this.updateItemQuality(item, LimitsRoseQuality.MAX);
    else if (item.quality + delta <= LimitsRoseQuality.MIN)
      this.updateItemQuality(item, LimitsRoseQuality.MIN);
    else this.updateItemQuality(item, (item.quality += delta));
  };

  changeBackstageQuality = (item: Item) => {
    if (item.sellIn < 11) {
      this.validateChangeQuality(item, 1);
    }
    if (item.sellIn < 6) {
      this.validateChangeQuality(item, 1);
    }

    if (item.sellIn <= 0) {
      this.updateItemQuality(item, 0);
    }
  };
  getChangeRate = (item: Item, isExpired: boolean): number => {
    const baseRate = isExpired ? 2 : 1;
    return item.name == Names.CONJURED ? 2 * baseRate : baseRate;
  };
  updateItem = (item: Item) => {
    if (item.name === Names.SULFURAS) return;

    const isExpired = item.sellIn <= 0 ? true : false;
    let changeRate = this.getChangeRate(item, isExpired);
    const doesDegrade =
      item.name != Names.BACKSTAGE_PASS && item.name != Names.BRIE;

    if (doesDegrade) changeRate *= -1;

    this.updateItemQuality(item, item.quality + changeRate);
    if (item.name == Names.BACKSTAGE_PASS) this.changeBackstageQuality(item);
    this.updateItemSellIn(item, item.sellIn - 1);
  };
}
