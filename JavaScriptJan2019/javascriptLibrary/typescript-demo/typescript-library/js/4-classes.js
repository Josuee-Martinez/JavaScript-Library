var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log('hello i am ', this.firstName);
    };
    return Person;
}());
;
var tom = new Person();
tom.firstName = 'tom';
tom.lastName = 'the tank engine';
console.log(tom);
tom.greet();
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
console.log(battleship);
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    ;
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.make = 'ford';
myCar.model = 'escape';
var myBike = new Motorcycle();
myBike.easyToDoWheelie = true;
myBike.make = 'maker';
myBike.model = 'fast bike';
console.log(myCar);
console.log(myBike);
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var autumnsFav = new Store('ikea', 'fishers');
console.log(autumnsFav);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newHire = new Employee();
newHire.setSalary(30000);
var employeeSalary = newHire.getSalary();
console.log('the salary is', employeeSalary);
//# sourceMappingURL=4-classes.js.map