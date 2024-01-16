import ConjuredItem from "../../../../app/modules/category/ConjuredItem";

describe("ConjuredItem", () => {
  test("updateQualityForConjured decreases quality by 2", () => {
    const conjuredItem = new ConjuredItem("Conjured Item", 5, 10);
    conjuredItem.updateQualityForConjured();

    expect(conjuredItem.quality).toBe(8);
    expect(conjuredItem.sellIn).toBe(4);
  });

  test("updateQualityForConjured decreases quality by 4 after sellIn date has passed", () => {
    const conjuredItem = new ConjuredItem("Conjured Item", 0, 10);
    conjuredItem.updateQualityForConjured();

    expect(conjuredItem.quality).toBe(6);
    expect(conjuredItem.sellIn).toBe(-1);
  });

  test("updateQualityForConjured should not degrade quality below 0 for normal items", () => {
    const conjuredItem = new ConjuredItem("Conjured Item", 5, 0);
    conjuredItem.updateQualityForConjured();

    expect(conjuredItem.quality).toBe(0);
    expect(conjuredItem.sellIn).toBe(4);
  });
});
