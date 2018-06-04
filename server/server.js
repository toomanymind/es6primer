const http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring'),
    random = require('./random');

const mime={
    '.js':'application/javascript',
    '.css':'text/css'
}

function start(router) {

    let requestHandler = (req, res) => {
        let data = '';




        let {pathname, query} = url.parse(req.url);
        let params = qs.parse(query);

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
    http.createServer(requestHandler).listen(8888);

    console.log('Server started.');
}

exports.start = start;
