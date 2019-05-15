var elasticsearch = require('elasticsearch');
var config = require('../config.js');

var hostNames = config.get("elasticSearch.hosts").split(",");
var port = config.get("elasticSearch.port");
var hosts = [];


var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
    sniffOnStart: true,
    sniffInterval: 600000
});

module.exports = new ElasticSearchClient(serverOptions);