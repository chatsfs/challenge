import { Item } from "./item.class";

interface IBaseItems {
  getItems: () => Array<Item>;
  updateQuality: () => void;
}

export abstract class BaseItems implements IBaseItems {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  getItems = () => {
    return this.items;
  };

  abstract updateItem: (item: Item) => void;

  updateQuality = () => {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    return this.items;
  };
}
