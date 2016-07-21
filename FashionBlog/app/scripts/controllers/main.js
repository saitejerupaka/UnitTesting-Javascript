'use strict';

/**
 * @ngdoc function
 * @name fashionBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fashionBlogApp
 */
angular.module('fashionBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
