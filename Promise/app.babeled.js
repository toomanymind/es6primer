'use strict';

var http = require('http'),
    random = require('./random'),
    axios = require('axios');

var origin = 'http://localhost:3030';

axios.get(origin + '/train/getList?uid=3123123').then(function (res) {
    console.log(res.data.data);
}).catch(function (err) {
    console.log('failed');
});

// http.createServer(function (req, res) {
// res.writeHead(200,{'Content-Type':'text/plain'});
// res.write(`Responding ${random()}`);
// res.end();
// }).listen(8888);