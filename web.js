var express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/components'));

var port = process.env.PORT || 3000;
console.log('Port ' + port);
app.listen(port);
