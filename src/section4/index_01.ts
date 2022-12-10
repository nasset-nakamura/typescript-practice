class Department {
  public name: string;
  private readonly count: number;

  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }

  describe = () => console.log(this.name);

  change = () => (this.count = 12);
}

const accounting = new Department('Accounting', 10);
console.log(accounting);
accounting.describe();
console.log(accounting.name);
console.log(accounting.count);
console.log(accounting.describe);
