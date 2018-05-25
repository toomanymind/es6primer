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



function f(x=1,y) {
    return [x,y];
}

// console.log(f());
// console.log(f(2));

function f1([x, y] = [1, 2], {z: z} = {z: 3}) {
    return x + y + z;
}

console.log(f1());



