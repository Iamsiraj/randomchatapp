/**
 * Created by Siraj on 2016-06-08.
 */
var myApp = angular.module('outsnap');
myApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    //.state('app', {
    //  url: "/app",
    //  abstract: true,
    //  templateUrl: "templates/login.html",
    //  controller: 'loginCtrl'
    //})

    .state('login', {
      url: "/login",
   //   views: {
       // 'menuContent': {
          templateUrl: "templates/login.html",
          controller: 'loginCtrl'
      //  }
    //  }
    })
    .state('signup', {
      url: "/signup",

    //  views: {
      //  'menuContent': {
          templateUrl: "templates/signup.html",
          controller: 'signupCtrl'
       // }
    //  }
    })
    .state('home', {
      url: "/home",


      templateUrl: "templates/home.html",
      controller: 'homeCtrl'

    })

    .state('settings', {
      url: "/settings",
      templateUrl: "templates/settings.html",
      controller: 'settingsCtrl'
    })
    .state('chat', {
      url: "/chat",
      templateUrl: "templates/chat.html",
      controller: 'chatCtrl'
    })
  $urlRouterProvider.otherwise('/login');

})
