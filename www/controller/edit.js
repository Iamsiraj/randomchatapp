/**
 * Created by Siraj on 2016-06-12.
 */
/**
 * Created by Siraj on 2016-06-12.
 */
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
    .controller('editCtrl',editCtrl)

  function editCtrl ($scope,$state){

    $scope.profile =  JSON.parse(window.localStorage.getItem("profile"));

    //  console.log(profile);

    $scope.back = function(){
      $state.go('home');
    }



  }
})();
