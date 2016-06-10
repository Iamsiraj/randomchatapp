/**
 * Created by Siraj on 2016-06-08.
 */
var myApp = angular.module('outsnap',['ionic','ngRoute']);
myApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl:'templates/login.html',
      controller:'loginCtrl'
    })

}]);
