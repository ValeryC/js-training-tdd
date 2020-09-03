'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => {
    return str.substr(2)
}

const cutLast = (str) => {
    return str.substr(0,str.length-2)
}

const cutFirstLast = (str) => {
    return str.substr(2,str.length-4)
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function')
assert.deepStrictEqual(cutFirst('string'), 'ring');

assert.strictEqual(typeof cutLast, 'function')
assert.deepStrictEqual(cutLast('string'), 'stri');

assert.strictEqual(typeof cutFirstLast, 'function')
assert.deepStrictEqual(cutFirstLast('string'), 'ri');

// End of tests */
