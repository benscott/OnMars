'use strict';

/**
 * @ngdoc function
 * @name Space3D.controller:ListController
 * @description
 * # ListController
 */
angular.module('Space3D')
  .controller('ListController', function($scope, ImageService) {
    $scope.images = ImageService.all();
  });
