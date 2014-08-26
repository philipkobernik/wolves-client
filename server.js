var Hapi = require('hapi');
var moonboots = require('moonboots_hapi');

var server = Hapi.createServer(3000, 'localhost');

server.start();
console.log('this thing is running!');
