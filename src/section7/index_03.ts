function Logger1(logString: string) {
  console.log('デコレータファクトリ - Logger1');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function Logger2(logString: string) {
  console.log('デコレータファクトリ - Logger2');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger1('デコレータ関数 - Logger1')
@Logger2('デコレータ関数 - Logger2')
class Person {
  name = 'Max';

  constructor() {
    console.log('Personオブジェクトを作成中...');
  }
}

const person = new Person();
console.log(person);
