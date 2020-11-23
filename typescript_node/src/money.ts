import { Expression, Sum } from "./expression";

export class Money implements Expression {
  amount: number;
  currencyShort: string;

  constructor(initialAmount: number, currency: string) {
    this.amount = initialAmount;
    this.currencyShort = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  plus(added: Money): Expression {
    return new Sum(this, added);
  }

  reduce(to: string): Money {
    return this;
  }

  times(i: number): Money {
    return new Money(this.amount * i, this.currencyShort);
  }
  currency(): string {
    return this.currencyShort;
  }

  equals(other: any): boolean {
    const otherMoney = other as Money;
    return (
      this.amount === otherMoney.amount &&
      this.currency() === otherMoney.currency()
    );
  }
}
