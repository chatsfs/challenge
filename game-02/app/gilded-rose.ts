export enum Names {
  BRIE = "Aged Brie",
  BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured mana bun",
}
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    return this.items;
  }
  updateItem(item: Item) {
    if (item.name === Names.SULFURAS) return;

    const isExpired = item.sellIn <= 0 ? true : false;
    let changeRate = this.getChangeRate(item, isExpired);
    const doesDegrade =
      item.name != Names.BACKSTAGE_PASS && item.name != Names.BRIE;

    if (doesDegrade) changeRate *= -1;
    this.updateItemQuality(item, changeRate);
    this.updateItemSellIn(item);
  }

  getChangeRate(item: Item, isExpired: boolean): number {
    const baseRate = isExpired ? 2 : 1;
    return item.name == Names.CONJURED ? 2 * baseRate : baseRate;
  }

  updateItemQuality(item: Item, changeRate: number) {
    this.changeQuality(item, changeRate);
    this.changeBackstageQuality(item);
  }
  changeBackstageQuality(item: Item) {
    if (item.name == Names.BACKSTAGE_PASS) {
      if (item.sellIn < 11) {
        this.changeQuality(item, 1);
      }
      if (item.sellIn < 6) {
        this.changeQuality(item, 1);
      }

      if (item.sellIn <= 0) {
        item.quality = 0;
      }
    }
  }

  changeQuality(item: Item, delta: number) {
    if (item.quality + delta >= 50) item.quality = 50;
    else if (item.quality + delta <= 0) item.quality = 0;
    else item.quality += delta;
  }

  updateItemSellIn(item: Item) {
    item.sellIn--;
  }
}
