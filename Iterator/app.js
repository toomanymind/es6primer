/* Chapter 15 Iterator */


/* for of */

// Array
// 对于数组，只返回数字索引
let arr = [{m:1}, {m:2}, {m:3}, {m:4}];
for (let {m:v} of arr) {
    console.log(v);
}


// Map
// 循环对象返回的是数组
let map = new Map();
map.set({},6).set(1,2).set('p',[]).set([],0);
for (let [k, v] of map) {
    // console.log(v);
}

