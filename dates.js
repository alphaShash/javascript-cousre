let today =  new Date();

let bob = new Date('december 7, 1987 07:01:23');

var elapsedTime =  today - bob;
console.log(elapsedTime);

// get parts
console.log(bob.getDate());

console.log(bob.getTime());