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
      // 
    
    // console.log(document.querySelector('a-scene'));

    // document.querySelector('a-assets').addEventListener('loaded', function(e){
    //   console.log('loaded');
    // });

    // console.log(document.querySelector('a-assets'));

    // document.querySelector('a-assets').addEventListener('timeout', function(e){
    //   console.log('timeout');
    // });    

    // document.getElementById('sky1').addEventListener('loaded', function(e){
    //   console.log('loaded scene-1');
    // });    

    

    });

  });


