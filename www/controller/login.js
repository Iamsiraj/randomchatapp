/**
 * Created by Siraj on 2016-06-08.
 */

(function(){

  'use strict';

angular.module('outsnap')
  .controller('loginCtrl',loginCtrl)

function loginCtrl ($scope,$state){
   // console.log('login')
    $scope.login= function(){
    //  console.log('login');
      $state.go('home')

    }

    $scope.signup = function (){
    //  console.log("sra")
      $state.go('signup')
    }



  }
})();
