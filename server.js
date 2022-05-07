const express = require('express')
const pino = requre("pino");

const { indexHandler, sayHelloHandler } = require('./routes/handlers')
const logger = pino({
  "transport": {
      "target": 'pino-pretty',
      "options": { "translateTime": true }
  }
});

const app = express();
const port = 3000;


app.get('/', indexHandler);

app.get('/hello/:name', sayHelloHandler);

app.listen(port, () => {
  console.log(`Hello world Application started and listening on http://localhost:${port}`)
})