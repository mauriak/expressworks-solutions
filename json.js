var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (err, data) {
        if (err) res.send(500);
        try {
            var books = JSON.parse(data);
            
        } catch (err) {
            res.send(500);
        }
        res.json(books);
    })
}).listen(process.argv[2]);
