const person = {
  name: 'nakamura',
  age: 37,
};

console.log(person);
console.log(person.nickname);

const person2: {
  name: string;
  age: number;
  sex?: number;
} = {
  name: 'nakamura',
  age: 37,
};

console.log(person2);
console.log(person2.name);
console.log(person2.sex);

const person3: {
  name: string;
  age: number;
  sex?: number;
  hobbies: {
    name: string;
    year?: number;
  }[];
} = {
  name: 'nakamura',
  age: 37,
  hobbies: [{ name: 'hobby1', year: 1 }, { name: 'hobby2' }],
};

console.log(person3);
person3.hobbies.forEach((hobby) => console.log(hobby));
