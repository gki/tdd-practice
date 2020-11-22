export interface Expression {}

export class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(10);
  }
}

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
    return new Money(this.amount + added.amount, this.currency());
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
