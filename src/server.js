'use strict';
const net = require('net');
const rpn = require('./rpn.js').rpn;
const server = net.createServer((socket) => {
  socket.on('data', function (data) {
    rpn(data.toString(), (err, result) => {
        if(err) socket.write(err + '\n');
        else socket.write(result + "\n");
    });
  });

  socket.on('error', (err) => {});
});

server.listen(12345, () => {
  console.log("opened server on %j", server.address());
});
