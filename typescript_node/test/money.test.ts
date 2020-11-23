import { Bank } from "../src/bank";
import { Expression, Sum } from "../src/expression";
import { Money } from "../src/money";

describe("money test", () => {
  test("レートを設定してUSDからCHFに変換する", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(result).toEqual(Money.dollar(1));
  });

  test("単純な足し算", () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(10));
  });

  test("$5*2=$10", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test("plusはSumを返却する", () => {
    const five: Money = Money.dollar(5);
    const sum: Sum = five.plus(five) as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  test("reduceで加算する", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result: Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  });

  test("通貨のテスト", () => {
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  });

  test("equals", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  test("Bank.reduce(Money)", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result).toEqual(Money.dollar(1));
  });

  test("test identity rate", () => {
    expect(new Bank().rate("USD", "USD")).toBe(1);
  });

  test("$5+10CHF=$10", () => {
    const fiveUSD: Expression = Money.dollar(5);
    const tenCHF: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(fiveUSD.plus(tenCHF), "USD");
    expect(result).toEqual(Money.dollar(10));
  });

  test("Expression.times", () => {
    const fiveUSD: Expression = Money.dollar(5);
    const tenCHF: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum: Expression = new Sum(fiveUSD, tenCHF).times(2);
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(20));
  });

  test("Sum.plus", () => {
    const fiveUSD: Expression = Money.dollar(5);
    const tenCHF: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum: Expression = new Sum(fiveUSD, tenCHF).plus(fiveUSD);
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(15));
  });
});
