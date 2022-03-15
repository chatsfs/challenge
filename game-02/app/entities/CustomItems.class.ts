import { Item } from "./Item.class";
import { BaseItem } from "./BaseItem.class";

export class ConjuredItem extends BaseItem {
  constructor(item: Item) {
    super(item);
  }
  getChangeRate(item: Item): number {
    return super.getChangeRate(item) * 2;
  }
}
export class SulfurasItem extends BaseItem {
  getChangeRate(item: Item): number {
    return 0;
  }
  doesDegrade(): boolean {
    return false;
  }
  updateItemSellIn = (item: Item, newValue: number) => {
    item.sellIn = item.sellIn;
  };

  updateItemQuality(item: Item, newValue: number) {
    item.quality = item.quality;
  }
}
export class BackstageItem extends BaseItem {
  getChangeRate(item: Item): number {
    let baseRate = super.getChangeRate(item);
    if (item.sellIn < 11) {
      baseRate++;
    }
    if (item.sellIn < 6) {
      baseRate++;
    }
    return baseRate;
  }
  doesDegrade(): boolean {
    return false;
  }
  updateItemQuality(item: Item, newValue: number) {
    if (item.sellIn <= 0) {
      newValue = 0;
    }
    super.updateItemQuality(item, newValue);
  }
}
export class BrieItem extends BaseItem {
  doesDegrade(): boolean {
    return false;
  }
}
