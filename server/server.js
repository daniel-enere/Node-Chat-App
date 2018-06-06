const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const debug = require('debug')('server');

var app = express();
let server = http.createServer(app);
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

server.listen(port, () => {
  debug(`Server is up on ${port}`);
})
