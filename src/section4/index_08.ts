interface Aged {
  readonly age: number;
}

interface Greetable extends Aged {
  name: string;

  greet(phrase: string): void;
}

class Person3 implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}, age: ${this.age}`);
  }
}

const person3 = new Person3('test', 37);
person3.greet('abc');
