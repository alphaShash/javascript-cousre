let hi = () => {
    console.log('howda');
}

hi();

let hi = (name) => {
    console.log(`howdy ${name}`);
}

hi('bob');

let add = (a, b) => { return a + b};
console.log(7, 3);

let names = ['as', 'df', 'gh', 'dff', 'rt'];
names.map( (name) => {
    console.log(`howdy ${name}`);
})

let names = ['as', 'df', 'gh', 'dff', 'rt'];
let i = 0;
names.map( (name) => { i++;
    console.log(`howdy ${name} ${i}!`);
})

let names = ['as', 'df', 'gh', 'dff', 'rt'];
var transformed = names.map((name) => {
    retunr `howdy ${name}`;
});
console.log(transformed);