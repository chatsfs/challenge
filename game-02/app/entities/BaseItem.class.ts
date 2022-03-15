import { Item } from "./Item.class";
import { LimitsGildenRoseQuality } from "../gilded-rose";

export interface IBaseItem {
  item: Item;
  getChangeRate: (item: Item) => void;
  doesDegrade: () => void;
  validateChangeQuality: (item: Item, delta: number) => void;
  updateItemSellIn: (item: Item, newValue: number) => void;
  updateItemQuality: (item: Item, newValue: number) => void;
}

export class BaseItem implements IBaseItem {
  item: Item;

  constructor(item: Item) {
    this.item = item;
  }

  getChangeRate(item: Item): number {
    const isExpired = item.sellIn <= 0 ? true : false;
    return isExpired ? 2 : 1;
  }
  doesDegrade(): boolean {
    return true;
  }
  validateChangeQuality = (item: Item, delta: number) => {
    if (item.quality + delta >= LimitsGildenRoseQuality.MAX)
      this.updateItemQuality(item, LimitsGildenRoseQuality.MAX);
    else if (item.quality + delta <= LimitsGildenRoseQuality.MIN)
      this.updateItemQuality(item, LimitsGildenRoseQuality.MIN);
    else this.updateItemQuality(item, (item.quality += delta));
  };
  updateItemSellIn = (item: Item, newValue: number) => {
    item.sellIn = newValue;
  };

  updateItemQuality(item: Item, newValue: number) {
    item.quality = newValue;
  }
}
