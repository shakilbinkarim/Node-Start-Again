
/**
 * The function demoDeAndrew() contains
 * everything Andrew showed in his demo
 */
function demoDeAndrew () {
    /**
     * The function greetUser(name)
     * cannot be accessed outside this
     * demoDeAndrew () function
     * the curly braces {} define the
     * greetUser (name) function's scope
     */
    function greetUser (name) {
        console.log('Hello ' + name + '!');
        console.log('Erza is Awesome!');
        console.log('In Shaa Allah, I will master Node.js');
    }

    function fairyTailGreetings (name, lastName) {
        return 'Hello ' + name + ' ' + lastName + '! We are Fairy Tail!';
    }

    greetUser('Shakil');
    greetUser('Samin');
    greetUser('Natsu');
    console.log(fairyTailGreetings('Jon', 'Snow'));
}


// Challenge ************************************************************************

function addTwoNumbers (num1, num2) {
    return num1 + num2;
}

/**
 * The greetUser (name) function
 * is invisible here and hence if the
 * line below wasn't commented out 
 * an Exception would have been thrown
 */
/*greetUser('Bloodseeker');*/

console.log(addTwoNumbers(3, 6));