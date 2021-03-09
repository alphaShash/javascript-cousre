// var myVar = 'i am at first global scope'; 

function one() {
    return 'one';
}

let value = one();
console.log(value);

// OR
console.log(one());

let value = one;
// console.log(typeof value);
console.log(value());

function two() {
    return function() {
        console.log('two');
    }
}

let myFunc = two();
myFunc();


function three() {
    return function() {
        return 'three';
    }
}

console.log(three()());