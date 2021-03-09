
let car = {
    make: 'bmw',
    model: 'i8',
    year: 2020,
    getPrice: function() {
        // perform some calls
        return 5000;
    },
    // methods
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription(); // . is the property access operator
console.log(car.year);

// console.log(car['year']);
// console.log(car[1]);

/*
var anotherCar = {};
anotherCar.whatever = 'bob';

console.log(anotherCar.whatever);*/

/*
var a  = {
    myProp: {b: 'hi'}
};

console.log(a.myProp.b);

var c = {
    myProp1: [
        {d: 'this'},
        {e: 'what'},
        {f: 'the'},
        {g: 'fcuk'}
    ]
} // graph of objects
*/

let carLot = [
    {year: 2020, make: 'audi', model: 'r8'},
    {year: 2021, make: 'bmw', model: '7series'},
    {year: 2019, make: 'chevy', model: 'camaro'},
];