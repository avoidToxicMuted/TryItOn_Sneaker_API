var nikeRoute  = require('./nikedb.json');
var pumaRoute = require('./pumadb.json');
// var adidasRoute  = require('./adidasdb.json');
// var hermesRoute = require('./hermesdb.json');
// and so on

module.exports = function() {
return {
firstRoute  : nikeRoute,
secondRoute : pumaRoute
// thirdRoute  : thirdRoute,
// fourthRoute : fourthRoute
 }
}