import Item from "../Item";

export default class ConjuredItem extends Item {
  updateQualityForConjured() {
    if (this.quality > 0) {
      this.quality -= 2;
    }

    this.sellIn -= 1;

    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 2;
    }

    this.quality = Math.max(0, this.quality);
  }
}
