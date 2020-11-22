import { Dollar } from "../src/money";

describe("money test", () => {
  test.todo("$5+10CHF=10 (レートが2:1の場合)");
  test("$5*2=$10", () => {
    // arrange
    const usd = new Dollar(5);
    // act
    usd.times(2);
    // assert
    expect(usd.amount).toBe(10);
  });
});
