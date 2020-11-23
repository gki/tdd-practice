import { Bank } from "../src/bank";
import { Expression, Sum } from "../src/expression";
import { Money } from "../src/money";

describe("Moneyを使った比較、演算処理", () => {
  describe("異なるあるいは同一通貨で足し算、掛け算ができる", () => {
    test("同一通貨での足し算ができる", () => {
      const five: Money = Money.dollar(5);
      const sum: Expression = five.plus(five);
      const bank: Bank = new Bank();
      const reduced: Money = bank.reduce(sum, "USD");
      expect(reduced).toEqual(Money.dollar(10));
    });
    test("とある通貨の掛け算ができる", () => {
      const five: Money = Money.dollar(5);
      expect(five.times(2)).toEqual(Money.dollar(10));
      expect(five.times(3)).toEqual(Money.dollar(15));
    });

    test("異なる通貨での足し算ができる", () => {
      const fiveUSD: Expression = Money.dollar(5);
      const tenCHF: Expression = Money.franc(10);
      const bank = new Bank();
      bank.addRate("CHF", "USD", 2);
      const result = bank.reduce(fiveUSD.plus(tenCHF), "USD");
      expect(result).toEqual(Money.dollar(10));
    });
  });

  describe("通貨は比較できる", () => {
    test("同じ通貨と数量を持っていれば同じと判定される", () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
      expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
      expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
    });
  });

  describe("通貨を他の通貨に変換できる", () => {
    test("レートを設定してUSDからCHFに変換できる", () => {
      const bank = new Bank();
      bank.addRate("CHF", "USD", 2);
      const result = bank.reduce(Money.franc(2), "USD");
      expect(result).toEqual(Money.dollar(1));
    });

    test("Moneyを生成すると所定の通貨が設定されている", () => {
      expect(Money.dollar(1).currency()).toBe("USD");
      expect(Money.franc(1).currency()).toBe("CHF");
    });

    test("同じ通貨通しの変換レートは1になる", () => {
      expect(new Bank().rate("USD", "USD")).toBe(1);
    });
  });

  describe("2項以上の計算も行える", () => {
    test("plusの結果は2項をもつ式として表される", () => {
      const five: Money = Money.dollar(5);
      const sum: Sum = five.plus(five) as Sum;
      expect(sum.augend).toEqual(five);
      expect(sum.addend).toEqual(five);
    });

    test("Bankのreduceを使って、変換レートと式の内容を考慮した結果が得られる", () => {
      const sum = new Sum(Money.dollar(3), Money.dollar(4));
      const bank = new Bank();
      const result: Money = bank.reduce(sum, "USD");
      expect(result).toEqual(Money.dollar(7));
    });

    test("Bankのreduceに通貨を与えるとその通貨が結果として得られる", () => {
      const bank = new Bank();
      const result = bank.reduce(Money.dollar(1), "USD");
      expect(result).toEqual(Money.dollar(1));
    });

    test("異なる通貨の足し算の結果をさらに掛け算ができる", () => {
      const fiveUSD: Expression = Money.dollar(5);
      const tenCHF: Expression = Money.franc(10);
      const bank = new Bank();
      bank.addRate("CHF", "USD", 2);
      const sum: Expression = new Sum(fiveUSD, tenCHF).times(2);
      const result = bank.reduce(sum, "USD");
      expect(result).toEqual(Money.dollar(20));
    });

    test("異なる通貨の足し算の結果にさらに足し算ができる", () => {
      const fiveUSD: Expression = Money.dollar(5);
      const tenCHF: Expression = Money.franc(10);
      const bank = new Bank();
      bank.addRate("CHF", "USD", 2);
      const sum: Expression = new Sum(fiveUSD, tenCHF).plus(fiveUSD);
      const result = bank.reduce(sum, "USD");
      expect(result).toEqual(Money.dollar(15));
    });
  });
});
