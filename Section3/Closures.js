/**
 * Closures refers to functions
 * inside other functions which can be returned
 * to the parent function's caller
 */

function createAdder (baseNumber) {
    function adder (number) {
        return number + baseNumber;
    }
    return adder;
}

var tenAdder = createAdder(10); //tenAdder is a function now

console.log(tenAdder(8));