interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = '値がありません。';
  if (element.length > 0) {
    descriptionText = `値は${element.length}個です。`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('お疲れさまです。'));
console.log(countAndDescribe(['test1', 'test2', 'test3']));
