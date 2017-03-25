'use strict';

const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: 7000
})

server.start(error => error ? console.log(error) : console.log('startet server:', server.info.uri))
