/**
 * Build server
 */

// Importing restify package
const restify = require('restify');
const cors = require('./cors');
const routes = require('../http/routes');

// Creating the server
const server = restify.createServer();

// Implant cors (middleware)
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({ mapParams: true }));

// Linking routes
routes(server);

// Exporting the server
module.exports = server;
