var myBooleanVariable = false;


/**
 * typeof is a unary operator 
 * in Node.js, it returns
 * the data type of a variable
 */
function toggleBoolean (booleanVar) {
    if (typeof booleanVar === 'boolean') {
        return !booleanVar;
    } else {
        console.log('Warning! Not a Boolean!\n');
    }
}

console.log(toggleBoolean(myBooleanVariable));