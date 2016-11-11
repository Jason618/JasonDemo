/**
 * Created by lichengjun on 16/10/18.
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //允许跨域访问
    res.setHeader('Access-Control-Allow-Origin', '*');
    //for api/comments
    const url = req.url;
    console.info(url);
    var data = [];
    switch (url) {
    case '/api/banners/':
        data = [{
            id: 1,
            author: 'jason1',
            text: 'this is one comment'
        }, {
            id: 2,
            author: 'jason2',
            text: 'this is 2 comment'
        }];
        break;
    case 'api/index/':
        data = [{
            id: 1,
            author: 'jason1',
            text: 'this is one comment'
        }, {
            id: 2,
            author: 'jason2',
            text: 'this is 2 comment'
        }];
        break;
    }
    console.info(req);
    console.dir(req);
    res.write(JSON.stringify(data));
    res.end();

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});