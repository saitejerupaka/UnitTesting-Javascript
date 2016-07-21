'use strict';
// var app = angular.module('fashionBlogApp',[]);

angular.module('fashionBlogApp').directive('originalImageDir', function () {       
    return {
        link: function(scope, element, attrs) {   

            element.bind("load" , function(e){ 

                // success, "onload" catched
                // now we can do specific stuff:

                console.log(element[0].naturalHeight, element[0].naturalWidth);
                scope.naturalWidth = element[0].naturalWidth;
                scope.naturalHeight = element[0].naturalHeight;
            });

        }
    }
});