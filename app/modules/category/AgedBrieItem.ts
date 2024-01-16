import Item from "../Item";

export default class AgedBrieItem extends Item {
  updateQualityForAgedBrie() {
    if (this.quality < 50) {
      this.quality += 1;
    }

    this.sellIn -= 1;

    if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1;
    }
  }
}
