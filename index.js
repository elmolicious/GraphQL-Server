'use strict';

const hapi = require('hapi');
const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi');

const context = require('./context')
const schema = require('./schemas');

const server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: 7000
})

// GraphQL Endpoint
server.register({
	register: graphqlHapi,
	options: {
		path: '/graphql',
		graphqlOptions: {
			schema,
			context
		},
		route: {
			cors: true
		}
	}
})

// GraphiQL Explorativ UI
server.register({
	register: graphiqlHapi,
	options: {
		path: '/graphiql',
		graphiqlOptions: {
			endpointURL: '/graphql'
		},
		route: {
			cors: true
		}
	}
})

server.start(error => error ? console.log(error) : console.log('startet server:', server.info.uri))
