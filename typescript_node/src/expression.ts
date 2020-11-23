import { Bank } from "./bank";
import { Money } from "./money";

export interface Expression {
  times(multiplier: number): Expression;
  plus(added: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  plus(added: Expression): Expression {
    return new Sum(this, added);
  }

  times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }

  reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
