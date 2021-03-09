/*var count = 3;
if (count == 4) {
    console.log('count is 4');
} else if (count > 4) {
    console.log('count is greater than 4');
} else if (count < 4) {
    console.log('count is lesser than 4');
} else {
    console.log('count is not 4');
}*/

/*
let hero = 'superman';
switch (hero) {
    case 'superman':
        console.log('super vision');
    case 'batman':
        console.log('rich');
    default:
        console.log('DC');
} */

// terinary operator
let a = 1, b = '1';
let result = (a === b) ? 'equal' : 'inequal';
console.log(result);
// console.log(a == b) ? 'equal' : 'inequal';

// === is a strict equality son in the above case the result will be inequal

let a = 1, b = '1';
let result = (a == b) ? 'equal' : 'inequal';
console.log(result);
// in this case the result will be equal as it is not strict equality

let a = 1, b = '1';
let result = (a != b) ? 'not equal' : 'equal';
console.log(result);