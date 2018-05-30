const http = require('http'),
    fs = require('fs');
    url = require('url');

const mime={
    '.js':'application/javascript',
    '.css':'text/css'
}

function start(router) {

    let requestHandler = (req, res) => {
        let pathname = url.parse(req.url).pathname;

        // router(req, res);
        if (pathname === '/favicon.ico') return;
        if (pathname == '/') {
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            fs.createReadStream('./index.html').pipe(res);
        }else if(fs.existsSync(`.${pathname}`)) {
            // console.log(mime[pathname.match(/\.\w+$/)[0]]);
            res.setHeader('Content-Type', `${mime[pathname.match(/\.\w+$/)[0]]};charset=utf-8`);
            fs.createReadStream(`.${pathname}`).pipe(res);
        }else{
            res.statusCode=404;
            res.end();
        }
    }

    http.createServer(requestHandler).listen(8888);

    console.log('Server started.');
}


exports.start = start;
