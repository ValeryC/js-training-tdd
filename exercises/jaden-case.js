'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = (str) => {
    const splitStr = str.toLowerCase().split(' ')
 
   
    for (let i = 0; i < splitStr.length; i++) {
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
  
   return splitStr.join(' ')

}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('the man on the road is tall'), 'The Man On The Road Is Tall');
// End of tests */
