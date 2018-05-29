/* Chapter 11 Set Map */


/* 数组去重 */
(()=>{
    let a= [1,2,3,2,4,2,3,2];
    let s = new Set(a);
    // console.log([...s]);
})();


(()=>{
    let m = new Map([
        [[[]],2],
        [3,4,5],
        [5,{}],
        [6,[]],
        [[],{}]
    ]);
    console.log(m);
})();

