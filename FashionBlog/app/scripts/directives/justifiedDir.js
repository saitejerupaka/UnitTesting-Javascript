'use strict';
// var app = angular.module('fashionBlogApp',[]);

angular.module('fashionBlogApp').directive('justified', ['$timeout',function ($timeout) {
  return {
   restrict: 'AE',
        link: function (scope, el, attrs) {
            scope.$watch('$last', function (newValue, oldValue) {
                if (newValue) {
                    $timeout(function () { $(el[0]).justifiedGallery({
                            lastRow : 'hide', 
                            rowHeight : 150, 
                            margins : 3
                        });
                        scope.showImages = true;
                 });
                }
            });
        }
      };
    }]);