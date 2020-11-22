export abstract class Money {
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

  abstract times(i: number): Money;
  currency(): string {
    return this.currencyShort;
  }

  equals(other: any): boolean {
    return (
      this.amount === (other as Money).amount &&
      this.constructor.name === other.constructor.name
    );
  }
}

export class Dollar extends Money {
  constructor(initialAmount: number, currency: string) {
    super(initialAmount, currency);
  }

  times(n: number): Money {
    return Money.dollar(this.amount * n);
  }
}

export class Franc extends Money {
  constructor(initialAmount: number, currency: string) {
    super(initialAmount, currency);
  }

  times(n: number): Money {
    return Money.franc(this.amount * n);
  }
}
