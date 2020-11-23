import { Money } from "./money";

export interface Expression {
  reduce(to: string): Money;
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
