'use strict';

/**
 * @ngdoc function
 * @name fashionBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fashionBlogApp
 */
angular.module('fashionBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
