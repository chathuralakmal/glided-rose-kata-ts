import Item from "./modules/Item";
import AgedBrieItem from "./modules/category/AgedBrieItem";
import BackstageItem from "./modules/category/BackstageItem";
import ConjuredItem from "./modules/category/ConjuredItem";

const AgedBrie = "Aged Brie";
const Backstage = "Backstage passes to a TAFKAL80ETC concert";
const Sulfuras = "Sulfuras, Hand of Ragnaros";
const Conjured = "Conjured Mana Cake";

class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    this.items.forEach((item) => this.updateItemQuality(item));
    return this.items;
  }

  updateItemQuality(item: Item) {
    if (item.name === Sulfuras) return;

    if (item.name === AgedBrie && item instanceof AgedBrieItem) {
      item.updateQualityForAgedBrie?.();
    }

    if (item.name === Backstage && item instanceof BackstageItem) {
      item.updateQualityForBackstage?.();
    }

    if (item.name === Conjured && item instanceof ConjuredItem) {
      item.updateQualityForConjured?.();
    }
  }
}

export { GildedRose, Item, AgedBrieItem, BackstageItem, ConjuredItem };
