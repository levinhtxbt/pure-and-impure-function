import expect from 'expect'
var deepFreeze = require('deep-freeze');

const addCounter = (list, number) => {
    //Impure function
    // list.push(number);
    // return list;

    return list.concat(number);
}

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [10];
    
    //add deepFreeze here
    deepFreeze(listBefore);

    expect(
        addCounter(listBefore, 10)
    ).toEqual(listAfter);
}

testAddCounter();

console.log("Test passed!!!");

