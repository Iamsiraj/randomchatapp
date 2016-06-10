/**
 * Created by Siraj on 2016-06-08.
 */
angular.module('outsnap',['ionic','ngRoute'])

.controller('loginCtrl',function($scope){
    console.log('login')
    $scope.login= function(){
      console.log('login');
    }

    $scope.signup = function (){
      console.log('signup');
    }

  })
