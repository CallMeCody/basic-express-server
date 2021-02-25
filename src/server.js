'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js');
const errors = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

app.use(express.json());
app.use(logger);
app.use(validator);



function start(port) {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

app.get('/person', (req, res) => {
  const person = { name: req.query.name }
  res.status(200).json(person);
  console.log(person);
})

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: start
}