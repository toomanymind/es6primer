/* Chapter 2 let and const */


/* let */
// 只在语句块中起作用，并且优先起作用
// 不允许提升
// 不允许重复声明
// 全局声明的变量不再是全局对象的属性

/* const */
// 只读，并且必须初始化;
// 只在块中起作用，机制同let

const a = 3;



// function f() {
//     console.log('I am outside.');
// }
//
// (function () {
//     if (true) {
//         function f() {
//             console.log('I am inside.');
//         }
//     }
//     f();
// }());










// function f() {
//     console.log('outside');
// }
// (function () {
//     var f = undefined;
//     if (false) {
//         function f() {
//             console.log('inside');
//         }
//     }
//
//     f();
// }());




// var node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5  // error
//         }
//     }
// };






// let { foo, bar } = { foo: 'aaa', bar: 'bbb'};
// const [a, b, c, d] = 'hello';
// let {toString: len} = 'hello';
// let {prop: x} = undefined;



