/**
 * @ngdoc function
 * @name Space3D.util:lodash
 * @description
 * # Lo-Dash
 * Expose Lo-Dash through injectable factory, so we don't pollute / rely on global namespace
 * just inject lodash as _
 */
(function () {
   'use strict';
	angular.module('Space3D')
	  .factory('_', function($window) {
	    return $window._;
	  });
}());