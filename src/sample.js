#! /usr/bin/env node

var zerorpc = require("zerorpc");

var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

for (var i = 10; i >= 0; i--) {
	client.invoke("hello", 0 + (i * 10))
	// client.invoke("hello", "RPC", function(error, res, more) {
 //    	console.log(res);
	// });
}