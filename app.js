var express = require("express");
var config = require("./server/config");
var app = express();

// Configuration

app.configure(function(){
  require("./server/server")(app);
});

require("./server/routes")(app);

console.log(JSON.stringify(config))
var port = config.get("port") || 4000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
