import { Dollar } from "../src/money";

describe("money test", () => {
  test.todo("$5+10CHF=10 (レートが2:1の場合)");
  test("$5*2=$10", () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test.todo("amountをprivateにする");
  test.todo("Moneyの丸め処理をどうするか");
});
