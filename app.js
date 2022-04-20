const hash = require('object-hash');

memo = (func) => {
    let dict = {};

    return (...args) => {
        args.sort();
        const hashedValue = hash(args);

        if (hashedValue in dict)
            return dict[hashedValue];

        dict[hashedValue] = func(...args);
        return dict[hashedValue];
    }
}


const test = (sub1, sub2) => {
    console.log('Executing test funct');
    return { first: sub1, second: sub2 }
}

const object1 = { a: 1, b: {g: 3}, c: 3, d: 4 };
const object2 = { a: 2, b: 2, c: 3, d: 4 };
const object3 = { b: {g: 3}, a: 1,  c: 3, d: 4 };
const myArray = [1, 24, 5];

const newTest = memo(test);
console.log(newTest(2, 1))
console.log(newTest(object1, myArray))
console.log(newTest(object1, myArray))
console.log(newTest(object3, myArray))
console.log(newTest(myArray, object1))
console.log(newTest(myArray, object2))