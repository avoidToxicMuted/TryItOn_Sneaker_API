var nikeRoute  = require('./nikedb.json');
var pumaRoute = require('./pumadb.json');
// and so on

module.exports = function() {
return {
nike  : nikeRoute,
puma : pumaRoute
// thirdRoute  : thirdRoute,
// fourthRoute : fourthRoute
 }
}