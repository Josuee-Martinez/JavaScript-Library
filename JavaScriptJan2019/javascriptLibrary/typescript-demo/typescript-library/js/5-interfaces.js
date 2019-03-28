// let cat: Animal = new Animal();
var lassie = {
    name: 'lassie',
    numberOfLegs: 4
};
var alecxsCat = {
    name: 'quin',
    meowsALot: true
};
function checkAnimal(animal) {
    return true;
}
checkAnimal(alecxsCat);
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log('apples purchased 0n:', d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=5-interfaces.js.map