let first = 'blah blah blah blah blah blah';
let second = 'do or do not';
let third = '4,12,15,16,1,23';

// you can even call mathods on string literals
// console.log('bob loves you'. toUpperCase());

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(3, 6);
console.log(mySlice);

let mySubstr = first.substr(3, 6);
console.log(mySubstr);

let myEndsWith = second.endsWith('blah');
console.log(myEndsWith);

let myStartsWith = second.startsWith('blah');
console.log(myStartsWith);

let myInclude = second.includes('blah');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

let myTrim = '    blowed         ';
console.log(myTrim.length);
console.log(myTrim.trim().length);

