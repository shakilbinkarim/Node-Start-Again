// Challenge

/**
 * If we want to check if a variable 
 * is undefined, it is better to use:
 * 
 * typeof variable === 'undefined' rather than
 * variable === undefined as
 * 
 * the later way can throw exception which
 * would be very bad
 */
function greetMage (name) {
    if (typeof name !== 'undefined') {
        console.log('Hello ' + name + '!');
    } else {
        console.log('State your name and bussiness!');
    }
}

greetMage('Erza');
greetMage();