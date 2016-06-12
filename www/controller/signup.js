/**
 * Created by Siraj on 2016-06-10.
 */
/**
 * Created by Siraj on 2016-06-08.
 */

(function(){

  'use strict';

  angular.module('outsnap')
    .controller('signupCtrl',signupCtrl)

  function signupCtrl ($scope,$state, $http){


  console.log("signup")
    $scope.back = function(){
      $state.go('login');
    }

    $scope.createAccount = function (){

      $http.post('http://localhost:3000/signup', {name: $scope.name, email: $scope.email, password: $scope.password})
        .then(function (response) {
          console.log(response.data);
        });

    }


  }
})();
