export class Dollar {
  amount: number;

  constructor(initialAmount: number) {
    this.amount = initialAmount;
  }

  times(n: number) {
    this.amount *= n;
  }
}
