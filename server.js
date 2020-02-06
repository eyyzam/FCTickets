const app = require('./backend/app');
const debug = require("debug")("node-angular");
const http = require('http');

const normalizePort = val => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port' + port;
  debug("Listening on " + bind);
}

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'Port: ' + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + ' requires elevated priveleges!');
      process.exit(1);
    break;
    case "EADDRINUSE":
      console.error(bind + ' is already in use!');
      process.exit(1);
    break;
    case "EADDRNOTAVAIL":
      console.error(bind + ' is in use!');
      process.exit(1);
      default:
  }
}

const port = normalizePort(process.env.PORT || '4201');
const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
