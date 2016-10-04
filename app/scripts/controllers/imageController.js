'use strict';

/**
 * @ngdoc function
 * @name Space3D.controller:ImageController
 * @description
 * # ImageController
 */
angular.module('Space3D')
  .controller('ImageController', function($scope, $stateParams, ImageService) {

  	// Load the image
  	$scope.image = ImageService.get($stateParams.imageId);

  });
