// Strings

var stringToDisplay = "hello world again";

// Numbers

var numberToDisplay_1 = 42;
var numberToDisplay_2 = Math.PI;
var numberToDisplay_3 = Math.sqrt(10);

// Boolean

var booleanToDisplay_1 = true;
var booleanToDisplay_2 = false;

/**
 * Operations
 */

var displayVar = booleanToDisplay_1 || booleanToDisplay_2;

/**
 * Casting
 */

var castedVar = Number(booleanToDisplay_1)

console.log(displayVar);
console.log(typeof(displayVar));
console.log(castedVar);
console.log(typeof(castedVar));

