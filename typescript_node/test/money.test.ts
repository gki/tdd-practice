import { Dollar, Franc } from "../src/money";

describe("money test", () => {
  test.todo("$5+10CHF=10 (レートが2:1の場合)");
  test("$5*2=$10", () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2)).toStrictEqual(new Dollar(10));
    expect(five.times(3)).toStrictEqual(new Dollar(15));
  });

  test("5CHF*2=10CHF", () => {
    const five: Franc = new Franc(5);
    expect(five.times(2)).toStrictEqual(new Franc(10));
    expect(five.times(3)).toStrictEqual(new Franc(15));
  });

  test.todo("nullとの比較");
  test.todo("他クラスとの比較");
  test.todo("Moneyの丸め処理をどうするか");
  test("equals", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
  });
  test.todo("hashcode");
  test.todo("DollarとFrancの重複");

  test.todo("hashcodeの一般化");
  test.todo("DollarとFrancの比較");
});
