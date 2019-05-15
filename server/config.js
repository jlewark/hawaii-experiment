var convict = require('convict');
var path = require('path');
// define a schema

var conf = convict({
  configFile: {
    doc: "name of config file",
    default: "none"
  },
  env: {
    doc: "The applicaton environment.",
    format: ["production", "development", "test", "staging", "local"],
    default: "development",
    env: "NODE_ENV"
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 5000,
    env: "PORT"
  },
  elasticSearch: {
    hosts: {
      doc: "The elastic hosts to bind to",
      default: "localhost",
      env: "ELASTIC_SEARCH_HOSTS"
    },
    "port": {
      format: "port",
      default: 9200,
      env: "ELASTIC_SEARCH_PORT"
    }
  }
});


// load environment dependent configuration

var env = conf.get('env');
conf.loadFile(path.join(__dirname + '../../config/' + env + '.json'));

// perform validation

conf.validate();

module.exports = conf;