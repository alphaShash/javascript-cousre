let a;
console.log(a);
console.log(typeof a);

let pattern =  /xyz/;
let value = 'this is xyz a text.';
let result = value.match(pattern);
console.log(result);
console.log(typeof result);

// typeof null =  object;

if(result === null) {
    console.log('no maztch is found');
}

// primitive data type is not zero, not undefined not an empty string
// it simply means that we have a variable where an onject reference was expected
// but its not set to any object reference

// undefined says im expecting to have a value but one
// was never set and it was expecting maybe a number string 
// or expecting an object reference but we dont have an object reference
// at this time