// Initializing an array
var grades = [60, 25];

var totalGrade = 0;

grades.push(80); // Adding item at the end of the array
grades.unshift(75); // Adding item at the begining of the array

/**
 * unshift-shift =============> Add/Remove from begining
 * push-pop =============> Add/Remove from end
 */

/**
 * The .forEach method of an array
 * takes a function as it's argument
 * and executes that function 
 * (called a callback function)
 * for every item in the array
 */
grades.forEach(function (grade) {
    totalGrade += grade;
});

console.log(grades);
console.log('Total Grade:\t' + totalGrade);
console.log('Average Grade:\t' + totalGrade / grades.length );


/**
 * Any item can be accessed in an Array
 * with it's index number like array[indexNumber]
 */

/*(function (arguments) {
    console.log('Testing');
});
* This doesn't work
*/


