import {
  GildedRose,
  Item,
  AgedBrieItem,
  BackstageItem,
  ConjuredItem,
} from "@/gilded-rose";

describe('Gilded Rose', () => {
  class MockItem extends Item {}

    it('should foo', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('foo');
    });

    test("updateItemQuality does not update Sulfuras item", () => {
      const sulfurasItem = new MockItem("Sulfuras, Hand of Ragnaros", 5, 10);
      const gildedRose = new GildedRose([sulfurasItem]);

      gildedRose.updateItemQuality(sulfurasItem);

      expect(sulfurasItem.quality).toBe(10);
      expect(sulfurasItem.sellIn).toBe(5);
    });

    test("updateItemQuality does not allow quality to exceed 50 in AgedBrie", () => {
      const agedBrieItem = new AgedBrieItem("Aged Brie", 5, 50);
      const gildedRose = new GildedRose([agedBrieItem]);

      gildedRose.updateItemQuality(agedBrieItem);

      expect(agedBrieItem.sellIn).toBe(4);
      expect(agedBrieItem.quality).toBe(50);
    });

    test("updateItemQuality sets quality to 0 when sellIn is negative in MockBackstage Item", () => {
      const backstageItem = new BackstageItem(
        "Backstage passes to a TAFKAL80ETC concert",
        -1,
        10
      );
      const gildedRose = new GildedRose([backstageItem]);

      gildedRose.updateItemQuality(backstageItem);

      expect(backstageItem.sellIn).toBe(-2);
      expect(backstageItem.quality).toBe(0);
    });

    test("updateItemQuality should not degrade quality below 0 for normal items in Conjured Item", () => {
      const conjuredItem = new ConjuredItem("Conjured Mana Cake", 5, 0);
      const gildedRose = new GildedRose([conjuredItem]);

      gildedRose.updateItemQuality(conjuredItem);

      expect(conjuredItem.sellIn).toBe(4);
      expect(conjuredItem.quality).toBe(0);
    });
});
