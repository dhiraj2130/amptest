/**
 * Created by dhiraj.kumar on 11/11/2016.
 */
//var MainController = require('./src/controllers/MainController');
// var viewpage = require('./main.html');
//
// require('angular');
// require('angular-route');
// require('angular-ui-bootstrap');
// require('angular-ui-router');
// require('jquery');

var app = angular.module('app',[]);

//
// app.config(function($routeProvider) {
//     $routeProvider
//         .when('/hello', {
//             // controller: 'MainController',
//             template : viewpage
//         });
// });

app.controller('MainController', ['$scope', function($scope){
    $scope.peopleList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];

    $scope.title = "hello title";
}]);
module.exports = app;