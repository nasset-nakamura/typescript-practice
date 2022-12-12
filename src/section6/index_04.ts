function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  console.log(`Value: ${obj[key]}`);
}

extractAndConvert({ name: 'test' }, 'name');
extractAndConvert({ name: 'test' }, 'age');
