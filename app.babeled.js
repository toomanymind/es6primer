'use strict';

// parameters: FCBE14
// selection background: A69CAF
// JSON key: B959B9
// JSON value: 54C0B1
// desktop bgcolor: R4G83U6
// http://www.cnblogs.com/aaronjs/p/3279314.html

var inquirer = require('inquirer');

var questions = [{
    type: 'input',
    name: 'name',
    message: 'name?'
}];
inquirer.prompt(questions).then(function (ans) {
    console.log(undefined);
    console.log('My name is ' + ans.name);
});

// var a = {
//     m: 'mmmm',
//     n: 'nnnn'
// };
//
//
// console.log(a);
//
//
// a.p = 1000;
//
// console.log(a);