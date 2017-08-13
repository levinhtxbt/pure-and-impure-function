import expect from 'expect'
var deepFreeze = require('deep-freeze');

const incrementCounter = (list, index) => {
    //impure function 
    // list[index]++; 
    // return list;

    //Avoiding array mutations with sclice(), concat()
    // return list
    //     .slice(0, index)
    //     .concat(list[index] + 1)
    //     .concat(list.slice(index + 1));
    
    //Avoiding array mutations with spread syntax
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
}

const testIncrementCounter = () => {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 21, 30];

    //deepFree
    deepFreeze(listBefore);

    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
}

testIncrementCounter();

console.log("Test passed");