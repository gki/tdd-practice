export abstract class Money {
  amount: number;

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }
  static franc(amount: number): Money {
    return new Franc(amount);
  }

  abstract times(i: number): Money;
  equals(other: any): boolean {
    return (
      this.amount === (other as Money).amount &&
      this.constructor.name === other.constructor.name
    );
  }
}
export class Dollar extends Money {
  constructor(initialAmount: number) {
    super();
    this.amount = initialAmount;
  }

  times(n: number): Money {
    return new Dollar(this.amount * n);
  }
}

export class Franc extends Money {
  amount: number;

  constructor(initialAmount: number) {
    super();
    this.amount = initialAmount;
  }

  times(n: number): Money {
    return new Franc(this.amount * n);
  }
}
