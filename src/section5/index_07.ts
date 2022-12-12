const fetchUserData = {
  id: '123',
  name: 'user123',
  // job: {
  //   title: 'Developer',
  //   description: 'TypeScript',
  // },
};

console.log(fetchUserData.id);
console.log(fetchUserData.name);
console.log(fetchUserData?.job?.title);
