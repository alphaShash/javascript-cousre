/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('audi', 'r8', 2021);
console.log(myCar);
 */
// new keyword in front of any normal function
// that makes it a constructor call

function MyFunction() {
    console.log('I am a simple function')
}

let myFunction = new MyFunction();

console.log(typeof myFunction);