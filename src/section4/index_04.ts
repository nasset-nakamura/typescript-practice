class Count {
  static staticCount = 100;
  private count: number;

  constructor() {
    this.count = 0;
  }

  get getCount() {
    return this.count;
  }

  set setCount(count: number) {
    this.count = count;
  }

  static staticMethod() {
    console.log(`Static: ${this.staticCount}`);
  }
}

const count = new Count();

console.log(count);
console.log(count.getCount);
count.setCount = 10;
console.log(count.getCount);

console.log(Count.staticCount);
Count.staticMethod();
