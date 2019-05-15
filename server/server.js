var express = require("express");
var config = require('./config');

module.exports = function server(app) {

  app.use(express.logger());
  app.set('views', __dirname + '../static');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/../static'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
};
