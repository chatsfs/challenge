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

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = this.updateItem(this.items[i]);
    }
    return this.items;
  }
  updateSellIn(item: Item) {}
  updateItem(item: Item) {
    if (item.name === Names.SULFURAS) return item;
    if (item.name != Names.BRIE && item.name != Names.BACKSTAGE_PASS) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == Names.BACKSTAGE_PASS) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }

    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      if (item.name != Names.BRIE) {
        if (item.name != Names.BACKSTAGE_PASS) {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    return item;
  }
}
