/* Chapter 16 Generator */


// Generator可用于直接赋值给对象的[Symbol.iterator]使其可遍历
// 执行Generator返回的遍历器也具有遍历器函数，执行之返回自己
// 因此for of对其进行循环会返回所有yield，不包括return
// Generator与其返回的遍历器的关系是类和实例的关系
// .throw
// .return

/* next参数 */
function* f1() {
    for (var i = 0; true; i++) {
        var reset = yield  i;
        if (reset) {
            i = -1;
        }
    }
}

function* f2(x) {
    var y = 2 * (yield (x+1));
    var z = yield (y / 3);
    return (x + y + z);
}
function* f3() {
    console.log('Started');
    console.log(`1.${yield yield}`);
    console.log(`2.${yield}`);
    return 'result';
}
let g = f3();


/* for of */
function* fib() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}
for (let e of fib()) {
    if (e > 1000) { break; }
    // console.log(e);
}

/* yield* */
function* gen() {
    yield* ['a', 'b', 'c', 'd'];
}

