"use strict";

/* Chapter 7 function extentions */

// 默认参数在调用时动态计算
// 带默认值得参数及其后的参数不算在length中
// 实参在形成时有作用域，默认参数优先访问参数表中标识符
// 参数不提升

// rest只能是最后一个参数
// rest不算在length中

(function () {
  return console.log(88888);
})();