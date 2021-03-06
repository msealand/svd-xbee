var util = require('util');
var XBee = require('svd-xbee').XBee;

// Replace with your xbee's UART location
var xbee = new XBee('/dev/ttyO1');

xbee.on("configured", function(config) {
  console.log("XBee Config: %s", util.inspect(config));
});

xbee.on("node", function(node) {
  console.log("Node %s connected", node.id);

  node.on("data", function(data) {
    node.send("pong");
    console.log("%s: %s", node.id, util.inspect(data)); 
  });

});
