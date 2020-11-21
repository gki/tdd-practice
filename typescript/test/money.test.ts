import { Dollar } from '../src';

describe('Money', () => {
  it.todo('$5*10CHF=$10(レートが2:1の場合')




  it('$5*2=$10', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toBe(10)
  })
});
