class Person {
  firstName: string;
  lastName: string;

  greet() {
    console.log('hello i am ', this.firstName)
  }
};

let tom: Person = new Person();

tom.firstName = 'tom';
tom.lastName = 'the tank engine';

console.log(tom);

tom.greet();

class Game {
  constructor(name: string, maker: string) {
    this.gameName = name;
    this.gameMaker = maker
  }

  gameName: string;
  gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');
console.log(battleship);

class Vehicle {
  type: string;
  make: string;;
  model: string;
  manufactureYear: number;
  runs: boolean;
  topSpeed: number
}

class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.make = 'ford';
myCar.model = 'escape';

let myBike: Motorcycle = new Motorcycle();
myBike.easyToDoWheelie = true;
myBike.make = 'maker';
myBike.model = 'fast bike';

console.log(myCar);
console.log(myBike)

class Store {
  constructor(public name: string, public city: string) {

  }
}

let autumnsFav: Store = new Store('ikea', 'fishers');

console.log(autumnsFav);

class Employee extends Person {
  private _salary: number;

  getSalary() : string {
    return this._salary.toString();
  }

  setSalary(newSalary: number) : void {
    this._salary = newSalary;
  }
}

let newHire: Employee = new Employee();
newHire.setSalary(30000);
let employeeSalary = newHire.getSalary();
console.log('the salary is', employeeSalary)