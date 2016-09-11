
/**
 * The function demoDeAndrew() contains
 * everything Andrew showed in his demo
 */
function demoDeAndrew () {
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

console.log(addTwoNumbers(3, 6));