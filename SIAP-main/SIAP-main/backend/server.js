const http = require('http');
const app = require('./app');
const conexion = require('./conexion');
const port = process.env.PORT || 1000;

const server = http.createServer(app);

server.listen(port);