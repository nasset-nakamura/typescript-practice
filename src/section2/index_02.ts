function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('正しい入力値ではありません。');
  }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const showResult = true;
const phrase = 'Result: ';

add(number1, number2, showResult, phrase);
