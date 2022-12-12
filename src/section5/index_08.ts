const userInput = '';

// nullまたはundefinedまたは空文字列の場合
const storeData1 = userInput || 'DEFAULT';
console.log(storeData);

// nullまたはundefinedの場合
const storeData2 = userInput ?? 'DEFAULT';
console.log(storeData);
