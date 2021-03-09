var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + '...' + count);
    }

    // return the object
    return {
        // value: count,
        get: function() {return count; },

        set: function(value) {count =  value},

        increment: function() {
            count += 1;
            print('after increment: ')
        },

        reset: function() {
            print('before reset: ');
            count = 0;
            print('after reset: ');
        }
    }
})();

// console.log(counter.count);
counter.increment();
counter.increment();
counter.increment();

// accidentally created closure 
// console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset();