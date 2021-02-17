require('dotenv').config;

if (!process.env.PORT) {
  return console.log('O arquivo de .env foi configurado com uma porta?');
}

const http = require('http');
const app = require('./src/app');

const a = '';

const server = http.createServer(app);

server.listen(process.env.PORT);
