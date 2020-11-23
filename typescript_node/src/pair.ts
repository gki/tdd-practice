export class Pair {
  private from: string;
  private to: string;
  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  equals(other: unknown): boolean {
    const pair = other as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  // JSのmapはhashCode比較ではないのでsymbol keyをmapのキーに使うようにする
  get key(): symbol {
    return Symbol.for(`Pair(${this.from},${this.to})`);
  }
}
