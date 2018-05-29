'use strict';

/* Chapter 10 Symbol */

var s1 = Symbol('s');
var s2 = Symbol.for('solid');
console.log(Symbol.keyFor(s2));