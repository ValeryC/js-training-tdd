'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
    return str.substr(0,2)
}

const keepLast = (str) => {
    return str.substr(str.length-2,str.length)
}

const keepFirstLast = (str) => {
    return str.substr(0,2) + str.substr(str.length-2,str.length)
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function')
assert.deepStrictEqual(keepFirst('string'), 'st');

assert.strictEqual(typeof keepLast, 'function')
assert.deepStrictEqual(keepLast('string'), 'ng');

assert.strictEqual(typeof keepFirstLast, 'function')
assert.deepStrictEqual(keepFirstLast('string'), 'stng');
// End of tests */
