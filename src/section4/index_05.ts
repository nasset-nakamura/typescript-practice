abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract outputName(): void;
}

class Dog extends Animal {
  outputName(): void {
    console.log(`Dog: ${this.name}`);
  }
}

class Cat extends Animal {
  outputName(): void {
    console.log(`Cat: ${this.name}`);
  }
}

const dog = new Dog('koro');
dog.outputName();

const cat = new Cat('mike');
cat.outputName();
