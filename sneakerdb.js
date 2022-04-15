var adidasRoute  = require('./adidas.json');
var nikeRoute  = require('./nikedb.json');
var pumaRoute = require('./pumadb.json');
var hermesRoute = require('./hermes.json');
var locationRoute = require('./storeLocationdb.json');
// and so on

module.exports = function() {
return {
adidas  : adidasRoute,
nike  : nikeRoute,
puma : pumaRoute,
hermes : hermesRoute,
location : locationRoute
 }
}