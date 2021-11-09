'use strict';

var car = {
    make: "Audi",
    model: "A4",
    year: 1998,
    getMake() {
        return this.make;
    },
    getModel() {
        return this.model;
    }
}
function allInfo(car) {
    return console.log(car.make, car.model, car.year, typeof car.make, typeof car.model, typeof car.year);
}
console.log(car.getMake());
console.log(car.getModel());
allInfo(car);
