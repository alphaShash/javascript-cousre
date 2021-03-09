function sayHello(name) {
    return function() {
        console.log('hello ' + name);
    }
}

let bob =  sayHello('bob');

bob();
// lexcial scoping uses the location where variable is declared within the source code to determine where that variable is available from the point
// on throughout the rest of your code