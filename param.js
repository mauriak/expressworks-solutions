var express = require('express');
var app = express();

app.put('/message/:id', function (req, res) {
    var id = req.params.id;
    var crypt = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
    res.send(crypt);
}).listen(process.argv[2]);