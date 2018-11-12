const http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring'),
    formidable = require('formidable'),
  random = require('./random');
// interfaces data
let initParams = require('../mock/initParams.json');
let generatecode = require('../mock/generatecode.json');
let voucher = require('../mock/voucher.json');
let account = require('../mock/account.json');
let currency = require('../mock/currency.json');
let cashTypeAction = require('../mock/cashTypeAction.json');
let cashierAccountAction = require('../mock/cashierAccountAction.json');
let employee = require('../mock/employee.json');
let salaryKind = require('../mock/salaryKind.json');
let assist = require('../mock/assist.json');
let reportview = require('../mock/reportview.json');
let voucherfindLatestVoucher = require('../mock/voucherfindLatestVoucher.json');
let reportgetIndexValue = require('../mock/reportgetIndexValue.json');
let operatenewThirdBoardForKJ3 = require('../mock/operatenewThirdBoardForKJ3.json');
let reportgetDataForNewPage = require('../mock/reportgetDataForNewPage.json');
let getCommonFunctions = require('../mock/getCommonFunctions.json');


const mime={
    '.js':'application/javascript',
    '.css':'text/css'
};

function start(router) {

    let requestHandler = (req, res) => {
        let data = '';




        let {pathname, query} = url.parse(req.url);
        let {m} = qs.parse(query);

      // mock
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.writeHead(200, {'Content-Type': 'text/pain'});
      switch (pathname) {
        case '/basedata/initParams':
          if (m === 'getCommonFunctions') {
            data = getCommonFunctions
          } else {
            data = initParams
          }
          res.write(JSON.stringify(data));
          break;
        case '/gl/voucher':
          if (m === 'findUsedVchNO') {
            data = voucher
          }
          if (m === 'findLatestVoucher') {
            data = voucherfindLatestVoucher
          }
          res.write(JSON.stringify(data));
          break;
        case '/gl/account':
          res.write(JSON.stringify(account));
          break;
        case '/gl/generatecode':
          res.write(JSON.stringify(generatecode));
          break;
        case '/bs/currency':
          res.write(JSON.stringify(currency));
          break;
        case '/gl/cashier/cashTypeAction':
          res.write(JSON.stringify(cashTypeAction));
          break;
        case '/gl/cashier/cashierAccountAction':
          res.write(JSON.stringify(cashierAccountAction));
          break;
        case '/pay/employee.do':
          res.write(JSON.stringify(employee));
          break;
        case '/pay/salaryKind.do':
          res.write(JSON.stringify(salaryKind));
          break;
        case '/bs/assist.do':
          res.write(JSON.stringify(assist));
          break;
        case '/report/reportview':
          res.write(JSON.stringify(reportview));
          break;
        case '/report/report':
          if (m === 'getIndexValue') {
            data = reportgetIndexValue
          }
          if (m === 'getDataForNewPage') {
            data = reportgetDataForNewPage
          }
          res.write(JSON.stringify(data));
          break;
        case '/log/operate':
          res.write(JSON.stringify(operatenewThirdBoardForKJ3));
          break;
        default:
          res.write(JSON.stringify({message: 'mock fail'}));
          break
      }
      res.end();
        return;




























        if (pathname == '/favicon.ico') return;
        if (pathname == '/') {
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            fs.createReadStream('./index.html').pipe(res);
        } else if (pathname == '/train/getCode') {
            res.writeHead(200, {'Content-Type': 'text/pain'});
            res.write(JSON.stringify({code: random()}));
            res.end();
            return;
        }else if (pathname == '/train/getValue') {
            res.writeHead(200, {'Content-Type': 'text/pain'});
            res.write(JSON.stringify({value: params.code ** 2}));
            res.end();
            return;
        }else if (pathname == '/train/getMessage') {
            res.writeHead(200, {'Content-Type': 'text/pain'});
            res.write(JSON.stringify({message: `Here's your message {${params.value}}`}));
            res.end();
            return;
        }else if (pathname == '/train/doPost' && req.method == 'POST') {
            req.on('data', function (chunk) {
                data += chunk;
            });
            req.on('end', function () {
                data = decodeURI(data);
                var dataObject = qs.parse(data);
                res.end(JSON.stringify({message: `${dataObject.user}'s post request heard.`}));
            });
            return;
        }else if (pathname == '/train/doUpload' && req.method == 'POST') {
            upload(req,res);
            return;
        }else if (fs.existsSync(`.${pathname}`)) {
            // console.log(mime[pathname.match(/\.\w+$/)[0]]);
            res.setHeader('Content-Type', `${mime[pathname.match(/\.\w+$/)[0]]};charset=utf-8`);
            fs.createReadStream(`.${pathname}`).pipe(res);
            return;
        }else{
            res.statusCode=404;
            res.end();
            return;
        }
    }
    http.createServer(requestHandler).listen(3000);

    console.log('Server started.');
}



function upload(req, res) {
    let form = new formidable.IncomingForm();//执行表单数据解析，获取其中的post参数
    form.uploadDir = "upload";//重要的一步
    form.parse(req, (error, fields, {file}) => {//获取文件上传数据
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('error');
            return;
        }
        //同步获取上传文件，并保存在/uploadFile下
        // fs.renameSync(`${file.path}`, `${__dirname}/upload/${random()}.jpg`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('success');
    });
}








exports.start = start;
