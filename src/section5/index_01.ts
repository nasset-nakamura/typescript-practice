type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// 交差型
type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log({ el });

type Cominable = string | number;
type Numeric = number | boolean;
type Universal = Cominable & Numeric;

const test1: Universal = 123;
const test2: Universal = '123';
const test3: Universal = true;
console.log(test1);
console.log(test2);
console.log(test3);
