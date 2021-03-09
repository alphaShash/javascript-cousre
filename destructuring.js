let a, b, c, d, e;

let name = ['blah', 'be','what', ' the', 'fuck'];

// [a, b, c, e, d] = names;
/* console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 */
/* let others;

[a, b, ...others] =  names;

console.log(a);
console.log(b);
console.log(others);
 */

 let year, model;
 ({year, model} = {
     make: 'audi',
     model: 'r8',
     year: 2021,
     value: 50000
 });

 console.log(year);
 console.log(model);