var CatalogController = require('./controllers/LocationController');

module.exports = function routes(app) {

  app.get('/', function(request, response) {
    response.render('index.html')
  });

  app.get('/api/catalog', CatalogController.search.bind(CatalogController));
  app.get('/api/catalog/:id', CatalogController.get.bind(CatalogController));
  app.put('/api/catalog/:id', CatalogController.put.bind(CatalogController));
  app.del('/api/catalog/:id', CatalogController.del.bind(CatalogController));

};
