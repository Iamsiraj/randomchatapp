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


    $scope.settings = function (){
      console.log("settings")
      $state.go('settings')
    }

    $scope.findFriends = function (){
      console.log("chat")
      $state.go('chat')
    }

  }
})();
