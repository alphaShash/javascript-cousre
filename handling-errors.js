// let a = 7 * undefined / 'panana';
// console.log(a);

// the above syntax does not work

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of code rose an exception you\'ll never see this.');

}

beforeTryCatch();

function afterTyrCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('if the previous line of code rose an exception you\'ll never see this.');
    } catch (error) {
        console.log('i caught an exception: ' + error.message);
    } finally {
        console.log('this will happen no matter what.')
    }
    console.log('my app is still running');
}

afterTyrCatch();

// other example

function performCalculation(obj) {
    if(!obj.hasOwnProperty('b')) {
        throw new Error('obj missing property');
    }
    // cont with calculation
    return 6;
}

function performHigherLevelOperation() {
    let obj;
    let value = 0;
    try{
        value = performCalculation(obj);
    } catch (error) {
        console.log(error.message);
    }

    if(value == 0) {

    }
}

performHigherLevelOperation();