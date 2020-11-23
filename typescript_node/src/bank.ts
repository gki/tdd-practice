import { Expression } from "./expression";
import { Money } from "./money";
import { Pair } from "./pair";

export class Bank {
  private rates: Map<symbol, number> = new Map<symbol, number>();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates.set(new Pair(from, to).key, rate);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    return this.rates.get(new Pair(from, to).key) ?? 1;
  }
}
