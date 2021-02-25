'use strict';

const validator = (req, res, next) => {
  if (!req.query.name) {
    throw new Error('no name in query string');
  } 
  next();
}

module.exports = validator;