// 201709_JJH ejs module 소개
let fs = require('fs');
const http = require('http');

http.createServer(function(request, response) {

    fs.readFile('example_ejs', 'utf-8', function (error, data) {

    });

}).listen(50000,function () {

});