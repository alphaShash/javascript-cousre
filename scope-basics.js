let a = 'first';
function scopeTest() {
    console.log(a);
    a = 'changed';

    let b = 'second'; 
    if(a != '') {
        console.log(a);
        console.log('inside: ' + b);
        let c = 'third'
    }
    // let b = 'second'; 
}
// console.log(c);
scopeTest();
console.log(a);

// when we declare a variable we have to understand in which scope it is defined because based on the scope rather the code block in which the variable is defined
