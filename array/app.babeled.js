/* Chapter 8 Array Extentions*/

// spread，(...实参)，逗号形参接收数组实参
// 可用于[]中数组元素

/*
    替代apply
*/

/*
    合并数组
    var arr1 = [1,2,3];
    var arr2 = [0];
    var arr3 = [7,8,9,10];
    var arr = [...arr1, ...arr2, ...arr3];
 */

/*
    解构
  （只能放在最后一位，个人感觉实际上意思跟rest更像，应该叫解构rest）
    var [head, ...tail] = [3,4,5,6,7];
*/

/*
    字符串生成数组、准确返回32位Unicode字符串长度
    NodeList转化为数组
*/
"use strict";