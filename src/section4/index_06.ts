interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const user1: Person = {
  name: 'nakamura',
  age: 37,

  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('test');
