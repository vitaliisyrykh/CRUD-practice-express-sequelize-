const http = require('http');
/* require('dotenv').config();
 */ const app = require('./app.js');

const server = http.createServer(app);

const port = process.env.PORT || 3010;

server.listen(port, () => {
  console.log(`APP started on port ${port}`);
});
