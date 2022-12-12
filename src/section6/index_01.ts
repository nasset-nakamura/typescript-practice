const names1: string[] = ['test1', 'test2'];
console.log(names1[0]);
console.log(names1.join(' '));

const names2: Array<string> = ['test1', 'test2'];
console.log(names2[0]);
console.log(names2.join(' '));

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
promise.then((data) => {
  console.log(data);
});
