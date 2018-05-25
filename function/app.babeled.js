"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* Chapter 7 function extentions */

// 1.默认参数结合结构赋值
// 2.不能出现双重解构
// 3.参数解构不能忽略后一个默认值


// function foo({x, y = 5}) {
//     console.log(x, y);
// }
//
// foo({});
// foo({x:10});
// foo({x:1,y:2});
// foo();


// let foo = 'outer';

// function bar(func = () => foo) {
//     let foo = 'inner';
//     console.log(func());
// }


function f() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments[1];

    return [x, y];
}

// console.log(f());
// console.log(f(2));

function f1() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 2],
        _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { z: 3 },
        z = _ref3.z;

    return x + y + z;
}

console.log(f1());