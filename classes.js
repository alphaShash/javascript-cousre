// class declaration
class Car {
    constructor(make, model, year) {
        this.make =  make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} ${this.year}`)
    }
}

let myCar = new Car('audi','R8',2021);
myCar.print();
// expression
// let car = class {
// 
// }

class SportsCar extends Car {
    revEngine(){
        console.log('vrroommm goes to ' + this.model);
    }
}

let mySportsCar =  new SportsCar('Dodge' ,'Challenger', 2020);
mySportsCar.print();
mySportsCar.revEngine();