type AliasNumberOrString = number | string;

const add2 = (n1: AliasNumberOrString, n2: AliasNumberOrString) => Number(n1) + Number(n2);

console.log(add2(10, 20));
