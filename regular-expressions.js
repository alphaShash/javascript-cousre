let pattern =  /xyz/;

console.log(pattern);
console-localStorage(typeof pattern);

let value = 'this is xyz a text.';
console.log(pattern.test(value));

console.log(value.replace(pattern, 'just'));

console.log(value.match(pattern));

var match = value.match(pattern);
console.log(match.index);