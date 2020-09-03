'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (str) =>{
    return str.toUpperCase()
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('aa'), 'AA');
assert.strictEqual(yell('sAlut'), 'SALUT');
assert.strictEqual(yell('abc'), 'ABC');
// End of tests */
