var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');

var routes = require('./routes/index')

var io = require('socket.io')(server);

app.use('/', routes)

server.listen(3000, function(){
  console.log('listening on localhost:3000')
});

module.exports = app;
