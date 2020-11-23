import { Bank } from "./bank";
import { Money } from "./money";

export interface Expression {
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
    return null;
  }

  reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
