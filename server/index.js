const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./lib/app');

const server = http.createServer(app.callback());
server.listen(port, () => {
  console.log('server currently connected to port', port);
});
