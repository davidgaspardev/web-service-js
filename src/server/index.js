/**
 * Build server
 */

// Importing restify package
const restify = require('restify');
const routes = require('../http/routes');

// Creating the server
const server = restify.createServer();

// Linking routes
routes(server);

// Exporting the server
module.exports = server;
