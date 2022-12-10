class Department {
  constructor(public name: string, private readonly count: number) {}

  describe = () => console.log(this.name);

  change = () => (this.count = 12);
}

const accounting = new Department('Accounting', 10);
console.log(accounting);
accounting.describe();
console.log(accounting.name);
console.log(accounting.count);
console.log(accounting.describe);
