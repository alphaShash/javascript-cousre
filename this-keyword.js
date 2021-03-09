/* let car = {
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

car.printDescription(); */

function first() {
    return this;
}

console.log(first() === global);

// this is bode'S global obj
// because thats where the first method was called

/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

// this depends on how a function is called

// an object can be passed as the firts argument to call 
// or apply and this keyword will be bound to it.

/* let myObj = {value: 'my obj'};

// this property is set on the global object
global.value = 'global object';

function third(name) {
    // returns something different depending on how we
    // call this method
    return this.value + name;
}

console.log(third());
// OR
console.log(third.call(myObj, 'bob'));
// OR
console.log(third.apply(myObj, ['bob'])); */

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer = {
    firstName: 'rich',
    lastName: 'why',
    print: fifth
}

let customer2 = {
    firstName: 'rich2',
    lastName: 'why2',
    print: fifth
}

customer.print();
customer2.print();