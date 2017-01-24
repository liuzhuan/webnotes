var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Server = function() {
    console.log('init');
}

util.inherits(Server, EventEmitter);

var s = new Server();

s.on('abc', function() {
    console.log('abc is catched!');
})