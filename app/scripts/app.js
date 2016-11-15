/**
 * @ngdoc overview
 * @name Space3D
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */
(function () {
   'use strict';
    angular.module('Space3D', ['ionic', 'ngCordova', 'ngResource'])
      .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
        });
      });
}());