'use strict';


angular.module('fashionBlogApp')
  .controller('viewImageCtrl', ['$route', '$routeParams', '$scope',function($route, $routeParams, $scope) {
      $scope.source = $routeParams.source;
      $scope.id = $routeParams.id;
      
  }]);