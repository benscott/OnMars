/**
 * @ngdoc function
 * @name OnMars.util:lodash
 * @description
 * # Lo-Dash
 * Expose Lo-Dash through injectable factory, so we don't pollute / rely on global namespace
 * just inject lodash as _
 */
(function () {
   'use strict';
	angular.module('OnMars')
	  .factory('_', function($window) {
	    return $window._;
	  });
}());