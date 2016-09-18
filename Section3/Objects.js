
/**
 * To declare an object
 * We can add properties to
 * the object, as soon as we
 * decleare it
*/
var mage = {
    gender: 'male',
    'guild': 'Fairy Tail' // property name can be within or without quotes
};

/**
 * Prperties can be added 
 * to an object just like that
 * we can either use the . notation
 * or the [] notation
 * [] notation is used when we don't 
 * know the property name of the object
 */
mage.firstName = 'Grey';
mage['lastName'] = 'Fullbuster';
mage.magicType = 'Maker Magic';

/**
 * To delete a property of an object
 */
delete mage.magicType;

/**
 * We can pass in an object into 
 * a function
 * Object properties can be referred 
 * to with both . and [] notations
 */
function greetMage (mage) {
    console.log('Hello ' + mage['firstName'] + ' ' + mage.lastName + '!\n');
}

greetMage(mage);

/**
 * Refering to a deleted or non-existent 
 * property of an object would return undefined
 */
console.log('Trying to print a deleted property:\t' + mage.magicType + '\n');

/**
 * Printing out an object
 */
console.log('Printing out the object:\t' + mage); // Apparently this line doesn't work -- can't concat objects with other strings
console.log(mage);