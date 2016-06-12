/**
 * Created by Siraj on 2016-06-10.
 */
/**
 * Created by Siraj on 2016-06-10.
 */
/**
 * Created by Siraj on 2016-06-08.
 */

(function(){

  'use strict';

  angular.module('outsnap')
    .controller('homeCtrl',homeCtrl)

  function homeCtrl ($scope,$state){
$scope.profileButton =false;
    $scope.list=false;

    $scope.settings = function (){

      $state.go('settings')
    }

    $scope.findFriends = function (){
      console.log("chat")
      $state.go('chat')
    }

    $scope.onSwipeLeft = function(){
      console.log("swipeleft")
      $scope.profileButton= true;
    }
    $scope.onSwipeRight = function(){
      console.log("swipeRight")
      $scope.profileButton= false;
    }
    $scope.viewProfile = function(){
      console.log('profile')
      $scope.list=true;
      $state.go('profile')
    }

  }
})();
