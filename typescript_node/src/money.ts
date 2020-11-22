export class Money {
  amount: number;
  currencyShort: string;

  constructor(initialAmount: number, currency: string) {
    this.amount = initialAmount;
    this.currencyShort = currency;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
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

export class Dollar extends Money {
  constructor(initialAmount: number, currency: string) {
    super(initialAmount, currency);
  }
}

export class Franc extends Money {
  constructor(initialAmount: number, currency: string) {
    super(initialAmount, currency);
  }
}
