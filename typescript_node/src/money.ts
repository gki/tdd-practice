export class Dollar {
  amount: number;

  constructor(initialAmount: number) {
    this.amount = initialAmount;
  }

  times(n: number): Dollar {
    return new Dollar(this.amount * n);
  }

  equals(other: Dollar): boolean {
    return this.amount === other.amount;
  }
}

export class Franc {
  amount: number;

  constructor(initialAmount: number) {
    this.amount = initialAmount;
  }

  times(n: number): Franc {
    return new Franc(this.amount * n);
  }

  equals(other: Franc): boolean {
    return this.amount === other.amount;
  }
}
