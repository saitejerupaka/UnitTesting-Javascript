'use strict';

/**
 * @ngdoc function
 * @name fashionBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fashionBlogApp
 */
angular.module('fashionBlogApp')
  .controller('editImageTagsCtrl', ['$scope','$compile', function ($scope, $compile) {

    
  	$scope.textArea = '';
	var count = 0;
    var writeMessage = function(message, X, Y )
    {
        console.log('controller', $scope.naturalHeight, $scope.naturalWidth);
        var heightRatio = $scope.naturalHeight / 100;
        var widthRatio =  $scope.naturalWidth / 200 ;
        console.log('widthRatio', widthRatio, 'heightRatio', heightRatio);
        var scaledX = (X * widthRatio * 300) / $scope.naturalWidth;
        var scaledY = (Y* heightRatio * 300) / $scope.naturalHeight;
        console.log('scaledX:', scaledX, 'scaledY:', scaledY);
    	
    	var wrapper = $('#imageWrapper');
        var view =  $('#imageView');
    	var styleWrapper = 'top:' +  (Y-5) +'px;left:'  + (X-5) + 'px';
    	count++;
    	var addTagWrapper = '<div id="' + count + '" class="tag" style='+ styleWrapper +'>'+count +'</div>';
    	var newElement = $compile( addTagWrapper)( $scope );
        wrapper.append( newElement );
        
        var style = 'top:' +  (scaledY - 5) +'px;left:'  + (scaledX - 5) + 'px';
        var addTag = '<div id="' + count + '" class="tag" style='+ style +'>'+count +'</div>';
        
        var viewElement = $compile( addTag)( $scope );
    	
        view.append(viewElement);
    };
    
    $scope.getMousePos = function(e) {
        var element = event.currentTarget;
        var parentOffset = $(element).parent().offset(); 
        var x = e.pageX - element.offsetLeft - parentOffset.left;
    	var y = e.pageY - element.offsetTop - parentOffset.top;
    	console.log('x:',x, 'y:', y);
    	var message = 'Mouse position: ' + x + ',' + y;
    	writeMessage(message, x, y);
      };
      
  }]);