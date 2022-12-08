function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(`Result: ${num}`);
}

printResult(add(10, 20));

let add5: (a: number, b: number) => number;
add5 = add;
console.log(add5(30, 40));
add5 = printResult;
console.log(add5(30, 40));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(111, 222, (result) => console.log(result));
