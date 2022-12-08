enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'nakamura',
  role: Role.ADMIN,
};

console.log(person);

// valueを指定すると以降はカウントアップされた値になる
enum Role2 {
  ADMIN = 100,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: 'nakamura',
  role: Role2.AUTHOR,
};

console.log(person2);
