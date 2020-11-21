export class Dollar {
  amount: number
  constructor(i: number) {
    this.amount = i
  }




  times(times: number) {
    this.amount *= times
  }
}
