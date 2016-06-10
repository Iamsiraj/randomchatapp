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
    .controller('settingsCtrl',settingsCtrl)

  function settingsCtrl ($scope,$state){


    console.log("settingsCtrl")

      $scope.back = function(){
        $state.go('home');
      }
  }
})();
