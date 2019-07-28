function routes(server) {
  // Route root
  server.get('/', (req, res, next) => {
    res.send('Hello World! I\'m the server');

    // Next method ends the route
    next();
  });
}

module.exports = routes;
