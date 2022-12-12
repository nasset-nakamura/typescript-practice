interface Admin2 {
  name: string;
  privileges: string[];
}

interface Employee2 {
  name: string;
  startDate: Date;
}

// 交差型
type ElevatedEmployee2 = Admin2 & Employee2;

const el: ElevatedEmployee2 = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log({ el });

type Cominable2 = string | number;
type Numeric2 = number | boolean;
type Universal2 = Cominable2 & Numeric2;

const test1: Universal2 = 123;
const test2: Universal2 = '123';
const test3: Universal2 = true;
console.log(test1);
console.log(test2);
console.log(test3);
