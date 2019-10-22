const chai = require("chai");
const config = require('config');
const server = require('../src');

const request = require('supertest');

describe('Server', ()=> {
    it('Tests that server is running on correct port', async()=>{
        chai.expect(server.port).to.equal(config.get('port'))
    });
});