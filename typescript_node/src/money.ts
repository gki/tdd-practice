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
