'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Server Tests:', () => {

  it('test a bad route that doesn\'t exist', async () => {
    await request.get('/fakeroute')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  });

  it('should return a ', async () => {
    await request.put('/person')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  });

  it('should return an error 500 if query string is empty', async () => {
    await request.get('/person')
      .then(result => {
        expect(result.status).toEqual(500);
      })
  })

  it('should return status 200 if name is in query string', async () => {
    await request.get('/person?name=fred')
      .then(result => {
        expect(result.status).toEqual(200);
      })
  })

  it('should return the correct query string entered', async () => {
    await request.get('/person?name=fred')
      .then(result => {
        expect(typeof result.body.name).toEqual('string');
        expect(result.body.name).toEqual('fred');
      })
  })
});