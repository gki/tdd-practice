import { Dollar, Franc, Money } from "../src/money";

describe("money test", () => {
  test.todo("$5+10CHF=10 (レートが2:1の場合)");
  test("$5*2=$10", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toStrictEqual(Money.dollar(10));
    expect(five.times(3)).toStrictEqual(Money.dollar(15));
  });

  test("5CHF*2=10CHF", () => {
    const five: Franc = Money.franc(5);
    expect(five.times(2)).toStrictEqual(Money.franc(10));
    expect(five.times(3)).toStrictEqual(Money.franc(15));
  });
  test("通貨のテスト", () => {
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  });
  test.todo("このテストを消すか？？↑↑");

  test.todo("nullとの比較");
  test.todo("他クラスとの比較");
  test.todo("Moneyの丸め処理をどうするか");
  test("equals", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });
  test.todo("hashcode");
  test.todo("DollarとFrancの重複");

  test.todo("hashcodeの一般化");
  test.todo("通貨の概念");
});
