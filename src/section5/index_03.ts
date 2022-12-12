// データ型の型ガード
type Cominable3 = string | number;

function add(a: Cominable3, b: Cominable3) {
  if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
  return a + b;
}

console.log(add(5, 6));
console.log(add('5', 6));

// オブジェクトの型ガード
type Admin3 = {
  name: string;
  privileges: string[];
};

type Employee3 = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee3 | Admin3;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) console.log(emp.privileges);
  if ('startDate' in emp) console.log(emp.startDate);
}

const user: Employee3 = { name: 'nakamura', startDate: new Date() };
printEmployeeInformation(user);

// クラスの型ガード
class Car {
  drive() {
    console.log('車を運転中...');
  }
}

class Truck {
  drive() {
    console.log('トラックを運転中');
  }

  loadCargo(amount: number) {
    console.log(`荷物を載せています ...: ${amount}`);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}
const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);
