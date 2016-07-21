describe("photo list controller tests", function(){
	

  	var controller;
  	var dataFactoryMock = {};
  	var deferred;
  	var sandbox;
  	var rootScope;
  	var documentReadyHandler;
  	beforeEach(function loadAppModule(){
  		module('fashionBlogApp');
  	});
  	beforeEach(function injectSetUp(){
  		inject(function($controller, $q, $rootScope, $document){
  			$document.ready = function(handler) { documentReadyHandler = handler; };
  			rootScope = $rootScope;
  			deferred = $q.defer();
  			dataFactoryMock = {
  				getImages: function(){
  					return deferred.promise;
  				}

  			};
  			controller = $controller('photoListCtrl',{
  				dataFactory: dataFactoryMock
  			});
  		});
  	});

  	beforeEach(function setUpSandbox(){
  		sandbox = sinon.sandbox.create();


  	});

  	afterEach(function restoreSandbox(){
  		sandbox.restore();
  	})

  	it('images list should be empty on create', function(){
  		expect(controller.images.length).to.be.equal(0);
  	});

  	it('message should be empty on create', function(){
  		expect(controller.message).to.be.equal('');
  	});
  	it('get images should call success when service success', function(){

  		var onSuccessSpy = sandbox.spy(controller, 'onSuccess');
  		var data = {
        hits: []
      };
  		controller.getImages();
  		deferred.resolve(data);
  		rootScope.$apply();

  		expect(onSuccessSpy.calledOnce).to.be.equal(true);
  	})
  	it('get images should call error when service error', function(){
  		var onErrorSpy = sandbox.spy(controller, 'onError');
  		var error = {
  			message: 'service error'
  		};

  		
  		controller.getImages();
  		deferred.reject(error);
  		rootScope.$apply();

  		expect(onErrorSpy.calledOnce).to.be.equal(true);
  	});

  	it('onSuccess should set images to data [1, 2, 3, 4]', function(){
  		var data = {
        hits: [1,2,3,4]
      }
  		controller.onSuccess(data);
  		expect(controller.images).to.be.deep.equal(data.hits);
  	})

  	it('onSuccess should set images to data [1,2,44,5]', function(){
  		var data = {
        hits:[1,2,44, 5]
      };
  		controller.onSuccess(data);
  		expect(controller.images).to.be.deep.equal(data.hits);
  	})

  	it('onError should set error message to service error', function(){
  		var error = {
  			message: 'service error'
  		};

  		controller.onError(error);
  		expect(controller.message).to.be.equal(error.message);
  	})
  	it('onError should set error message to service not found', function(){
  		var error = {
  			message: 'service not found'
  		};

  		controller.onError(error);
  		expect(controller.message).to.be.equal(error.message);
  	})

  	it('should register getTasks as handler for document ready', function() {
    	expect(documentReadyHandler).to.be.eql(controller.getImages);
  	});

})