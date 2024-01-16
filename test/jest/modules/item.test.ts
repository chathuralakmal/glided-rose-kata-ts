import Item from "../../../app/modules/Item";

describe("Item", () => {
  it("should create an Item", () => {
    const item = new Item("Some Item", 10, 20);
    expect(item.name).toBe("Some Item");
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(20);
  });
});
