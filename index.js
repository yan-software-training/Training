"use strict";
function getCounter() {
    let counter = function (start) {
        console.log('start: ', start);
    };
    counter.interval = 123;
    // counter.reset = function () { };
    console.log('counter: ', counter);
    return counter;
}
let c = getCounter();
// const res = c(10);
// console.log('c(10): ', res);
// c.reset();
c.interval = 5.0;
