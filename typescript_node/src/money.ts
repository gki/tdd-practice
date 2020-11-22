class Money {
  amount: number;

  equals(other: any): boolean {
    return this.amount === (other as Money).amount;
  }
}
export class Dollar extends Money {
  constructor(initialAmount: number) {
    super();
    this.amount = initialAmount;
  }

  times(n: number): Dollar {
    return new Dollar(this.amount * n);
  }
}

export class Franc extends Money {
  amount: number;

  constructor(initialAmount: number) {
    super();
    this.amount = initialAmount;
  }

  times(n: number): Franc {
    return new Franc(this.amount * n);
  }
}
