class Character {
  constructor(skil1) {
    this.skil1 = skil1;
  }
}

const fireball = () => console.log('fireball');
const wheelwind = () => console.log('wheelwind');

const barbarian = new Character(wheelwind);
const wizard = new Character(fireball);

barbarian.skil1();
wizard.skil1();
