
var app = angular.module('app',[]);

app.controller('MainController', ['$scope', function($scope){

    setup = function() {
        $scope.peopleList = ['Sean', 'Yaw', 'Lucy', 'Eric', 'Rory', 'Hayley'];
        $scope.title      = "AMP Test";
    }
    setup();
    

}]);
module.exports = app;