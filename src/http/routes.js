function routes(server) {
  // Route root
  server.get('/', (req, res, next) => {
    // Send response
    res.send('Hello World! I\'m the server');

    // Next method ends the route
    next();
  });

  /**
   * Categories CRUD
   */

  // Method GET
  server.get('/category', (req, res, next) => {
    // Send response
    res.send(['1', 'test']);

    // Next method ends the route
    next();
  });
  // Method POST
  server.post('/category', (req, res, next) => {
    const { name } = req.params;
    // Send response
    res.send(name);

    // Next method ends the route
    next();
  });
  /**
  //Method PUT
  server.put('/category', (req, res, next) => {
    next();
  });
  // Method DELETE
  server.delete('/category', (req, res, next) => {
    next();
  });
  */
}

module.exports = routes;
