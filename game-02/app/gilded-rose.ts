import { Item } from "./entities/Item.class";
import { BaseItems } from "./entities/base.abstract";
import { BaseItem } from "./entities/BaseItem.class";
import {
  BackstageItem,
  BrieItem,
  ConjuredItem,
  SulfurasItem,
} from "./entities/CustomItems.class";

export enum Names {
  BRIE = "Aged Brie",
  BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured mana bun",
}

export enum LimitsGildenRoseQuality {
  MAX = 50,
  MIN = 0,
}
interface IGildedRose {
  generateItem: (item: Item) => void;
}
export class GildedRose extends BaseItems implements IGildedRose {
  generateItem = (item: Item): BaseItem => {
    let baseItem: BaseItem;
    switch (item.name) {
      case Names.BACKSTAGE_PASS: {
        baseItem = new BackstageItem(item);
        break;
      }
      case Names.BRIE: {
        baseItem = new BrieItem(item);
        break;
      }
      case Names.CONJURED: {
        baseItem = new ConjuredItem(item);
        break;
      }
      case Names.SULFURAS: {
        baseItem = new SulfurasItem(item);
        break;
      }
      default:
        baseItem = new BaseItem(item);
        break;
    }
    return baseItem;
  };
  updateItem = (item: Item) => {
    const baseItem = this.generateItem(item);

    let changeRate = baseItem.getChangeRate(item);
    const doesDegrade = baseItem.doesDegrade();

    if (doesDegrade) changeRate *= -1;

    baseItem.updateItemQuality(item, item.quality + changeRate);
    baseItem.updateItemSellIn(item, item.sellIn - 1);
  };
}
