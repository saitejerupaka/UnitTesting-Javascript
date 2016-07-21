 'use strict';

    var app = angular.module('fashionBlogApp');

    app.factory('dataFactory', ['$http', '$q', function($http, $q) {

        var self = this,
            dataFactory = {};
        var api_key = '2609877-2616e4bfd203b2577b07cd8e6';
        var image_params = {
            'key': api_key,
            'per_page' : 20,
            'safesearch':true,
            'editors_choice': true
            };

        /* Helper Funtions */
        dataFactory.get = function(call, params) {
            var deferred = $q.defer();
            var onSuccess = function(data) {
                deferred.resolve(data);
            };

            var onError = function(error) {
                deferred.reject(error);
            };
                
            $http.get(call, {
                    params: params
            }).
            success(onSuccess).
            error(onError);
            
            return deferred.promise;
        };

        dataFactory.getImages = function() {
            return dataFactory.get("https://pixabay.com/api",image_params);
        }
        return dataFactory;
    }]);