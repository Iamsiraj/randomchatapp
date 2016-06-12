/**
 * Created by Siraj on 2016-06-08.
 */

(function(){

  'use strict';

angular.module('outsnap')
  .controller('loginCtrl',loginCtrl)

function loginCtrl ($scope,$state,$http){
   // console.log('login')
    $scope.login= function(){

      $http.post('http://localhost:3000/login',{email:$scope.email,password:$scope.pass})
        .then(function(response){
     //     console.log(response)
          if(response.data.status==200){
            console.log("logged in");
            window.localStorage.setItem("profile",JSON.stringify(response.data.user));
           // console.log(response.data.user);
          //  console.log(JSON.parse(window.localStorage.getItem("profile")))
            $state.go('home')
           // userData.setUser(response.data.user);
           // localStorage.setItem('userInfo',JSON.stringify(response.data.user));

          }else{
            console.log("email or password incorrect");
          }
        })


    };

    $scope.signup = function (){
    //  console.log("sra")
      $state.go('signup')
    }



  }
})();
