'use strict';

/**
 * @ngdoc overview
 * @name Space3D
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('Space3D', ['ionic', 'ngCordova', 'ngResource'])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html'
      })
      .state('app.list', {
        url: '/list',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/list.html',
            controller: 'ListController'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/list');
  });


