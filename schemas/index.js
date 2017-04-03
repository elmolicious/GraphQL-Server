'use strict';

const fs = require('fs');
const graphqlTools = require('graphql-tools');
const path = require('path');

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'UTF-8');
const resolvers = require('./resolvers');

module.exports = graphqlTools.makeExecutableSchema({ typeDefs, resolvers });
