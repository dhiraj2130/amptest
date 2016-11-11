
require('./vendor.js')();
var appModule = require('../../app');

angular.element(document).ready( function () {
  
  angular.bootstrap(document, [appModule.name]);
});
