import BackstageItem from "../../../../app/modules/category/BackstageItem";

describe("BackstageItem", () => {
  test("updateQualityForBackstage increases quality by 1", () => {
    const backstageItem = new BackstageItem("Backstage Pass", 20, 30);
    backstageItem.updateQualityForBackstage();

    expect(backstageItem.sellIn).toBe(19);
    expect(backstageItem.quality).toBe(31);
  });

  test("updateQualityForBackstage increases quality by 2 when sellIn is 10 or less", () => {
    const backstageItem = new BackstageItem("Backstage Pass", 10, 30);
    backstageItem.updateQualityForBackstage();

    expect(backstageItem.sellIn).toBe(9);
    expect(backstageItem.quality).toBe(32);
  });

  test("updateQualityForBackstage increases quality by 3 when sellIn is 5 or less", () => {
    const backstageItem = new BackstageItem("Backstage Pass", 5, 30);
    backstageItem.updateQualityForBackstage();

    expect(backstageItem.sellIn).toBe(4);
    expect(backstageItem.quality).toBe(33);
  });

  test("updateQualityForBackstage sets quality to 0 when sellIn is less than 0", () => {
    const backstageItem = new BackstageItem("Backstage Pass", -1, 30);
    backstageItem.updateQualityForBackstage();

    expect(backstageItem.sellIn).toBe(-2);
    expect(backstageItem.quality).toBe(0);
  });

  test("updateQualityForBackstage does not allow quality to exceed 50", () => {
    const backstageItem = new BackstageItem("Backstage Pass", 5, 50);
    backstageItem.updateQualityForBackstage();

    expect(backstageItem.sellIn).toBe(4);
    expect(backstageItem.quality).toBe(50);
  });

});
