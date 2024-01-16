import AgedBrieItem from ".../../../app/modules/category/AgedBrieItem";

describe("AgedBrieItem", () => {
  test("updateQualityForAgedBrie increases quality by 1", () => {
    const agedBrieItem = new AgedBrieItem("Aged Brie", 5, 30);
    agedBrieItem.updateQualityForAgedBrie();

    expect(agedBrieItem.sellIn).toBe(4);
    expect(agedBrieItem.quality).toBe(31);
  });

  test("updateQualityForAgedBrie increases quality by 2 after sellIn date has passed", () => {
    const agedBrieItem = new AgedBrieItem("Aged Brie", 0, 30);
    agedBrieItem.updateQualityForAgedBrie();

    expect(agedBrieItem.sellIn).toBe(-1);
    expect(agedBrieItem.quality).toBe(32);
  });

  test("updateQualityForAgedBrie does not allow quality to exceed 50", () => {
    const agedBrieItem = new AgedBrieItem("Aged Brie", 5, 50);
    agedBrieItem.updateQualityForAgedBrie();

    expect(agedBrieItem.sellIn).toBe(4);
    expect(agedBrieItem.quality).toBe(50);
  });

  test("updateQualityForAgedBrie should not increase quality when quality is equal to 50", () => {
    const backstageItem = new AgedBrieItem("Aged Brie", -1, 50);
    backstageItem.updateQualityForAgedBrie();

    expect(backstageItem.sellIn).toBe(-2);
    expect(backstageItem.quality).toBe(50);
  });
});
