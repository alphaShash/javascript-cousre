let names = ['david', 'tom', 'jerry', 'patel'];
let others = ['mike', ' jane', 'mandy', 'chantal'];

let lost = [4, 8, 56 ,12, 23, 26];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

var combine =  lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

console.log(lost.shift()); // takes the one item of the front side of an array
// bascially it is a pop but which removes from the front
console.log(lost);

lost.unshift(1,2,3,4); // unshift works like push but adds elements to the front
console.log(lost);

console.log(names);
console.log(names.reverse());

console.log(names.sort());

console.log(others.indexOf('mandy'));

console.log(combine.lastIndexOf(1));

// map
var filtered = combine.filter((x) => { if (x <= 15) return x;})
console.log(filtered);

names.forEach((names) => console.log(`howdy ${names}`));

console.log(filtered.every((num) => num <= 10));

console.log(fibonacci.some((numn) => num > 50));