/**
 * Created by Siraj on 2016-06-10.
 */
/**
 * Created by Siraj on 2016-06-08.
 */

(function(){

  'use strict';

  angular.module('outsnap')
    .controller('chatCtrl',chatCtrl)

  function chatCtrl ($scope,$state , $ionicSideMenuDelegate, $http , $sce){

    console.log("signup")
$scope.chatHistory= [];
     $scope.disconnect = function(){

       $state.go('home')
     }
    $scope.online = function (){
      $ionicSideMenuDelegate.toggleRight()
    }
    $scope.sendMessage = function(){
   //   console.log($scope.message);
      socket.emit ('chat message', $scope.message);
    }

    socket.on('chat message' , function(msg){
      console.log(msg)
      $scope.chatHistory.push(msg);
     // $scope.chatHistory.append().text(msg);


    })

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

  //  $scope.body ='<li class="mar-btm"> <div class="media-body pad-hor"> <div class="speech"> <a href="#" class="media-heading">John Doe</a> <p>Hello Lucy, how can I help you today ?</p> <p class="speech-time"> <i class="fa fa-clock-o fa-fw"></i>09:23AM </p> </div> </div> </li>'






  }
})();
