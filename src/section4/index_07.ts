interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const person2 = new Person2('test');
person2.greet('abc');
