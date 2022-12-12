interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal2 = Bird | Horse;

function moveAnimal(animal: Animal2) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('移動速度：' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 100 });
moveAnimal({ type: 'horse', runningSpeed: 200 });
