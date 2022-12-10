class Department {
  constructor(public name: string, private readonly count: number) {}

  describe = () => console.log(this.name);
}

class ITDepartment extends Department {
  constructor(private readonly count: number) {
    super('IT', count);
  }

  describe = () => console.log(`IT: ${this.name}`);
}

const it = new ITDepartment(20);
console.log(it);
it.describe();
console.log(it.name);
console.log(it.count);
console.log(it.describe);
