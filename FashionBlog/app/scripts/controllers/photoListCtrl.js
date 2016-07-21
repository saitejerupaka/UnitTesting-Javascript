'use strict';


angular.module('fashionBlogApp')
  .controller('photoListCtrl',['dataFactory','$document',
         function (dataFactory, $document) {
     var self = this;
      self.showImages = true; //should test this
      self.images = [];
      self.message = '';
      self.onError = function(error){
        self.message = error.message;
      };
      self.onSuccess = function(data){
        self.images = data.hits;
        self.showImages = true;
      };
      
      self.getImages = function(){
            dataFactory.getImages()
                       .then(self.onSuccess)
                       .catch(self.onError);
      }
      $document.ready(self.getImages);
  }]);
