import Item from "../Item";

export default class BackstageItem extends Item{
  updateQualityForBackstage() {
    if (this.quality < 50) {
      this.quality += 1;

      if (this.sellIn < 11 && this.quality < 50) {
        this.quality += 1;
      }

      if (this.sellIn < 6 && this.quality < 50) {
        this.quality += 1;
      }
    }

    this.sellIn -= 1;

    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}
