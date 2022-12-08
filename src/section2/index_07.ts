const add = (n1: number | string, n2: number | string) => {
  if (typeof n1 === 'string' && typeof n1 === 'string') {
    return n1 + n2;
  } else {
    return Number(n1) + Number(n2);
  }
};

console.log(`1 + 1 = ${add(1, 1)}`);
console.log(`2 + '3' = ${add(2, '3')}`);
console.log(`'4' + '5' = ${add('4', '5')}`);
