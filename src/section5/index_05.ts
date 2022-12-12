interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: '正しいメールアドレスではありません。',
  key: 123,
};

console.log(errorBag);
