interface Animal {
  name: string;
  numberOfLegs: number;
}

// let cat: Animal = new Animal();

let lassie: Animal = {
  name: 'lassie',
  numberOfLegs: 4
}
let alecxsCat = {
  name: 'quin',
  meowsALot: true
}

function checkAnimal(animal: Animal) {
  return true;
}

checkAnimal(alecxsCat)


interface Product {
  name: string;
  price: number;

  setTimeOfPurchase(d: Date);
}

class Apples implements Product {
  name: 'Apples';
  price: 5.50;

  setTimeOfPurchase(d: Date) {
    console.log('apples purchased 0n:', d);
    
  }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()))