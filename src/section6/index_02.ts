function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObject = merge({ name: 'test', hobbies: ['hobby1', 'hobby2'] }, { age: 30 });
console.log(mergeObject.age);
console.log(mergeObject.hobbies.join(' '));
