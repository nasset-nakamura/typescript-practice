// 事前に指定しないと (string | number)[] と型推論される
const role1 = [1, 'admin'];

console.log(role1);

// 明示的に型指定することで [number, string] となるが、pushできてしまう点に注意
const role2: [number, string] = [2, 'others'];

role2.push('others');
role2.push(2);

console.log(role2);
