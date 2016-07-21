describe("data Factory tests", function(){

	var defered;
	var q;
	var factory;
	var httpBackend;
	var sandbox;
	
	beforeEach(function loadAppModule(){
  		module('fashionBlogApp');
  	});

	beforeEach(function dataFactoryInject(){
		sandbox = sinon.sandbox.create();
		inject(function($q, $httpBackend, dataFactory){
			factory = dataFactory;
			httpBackend = $httpBackend;
			defered = $q.defer();
		})
	})

	afterEach(function(){
		sandbox.restore();
	})
	it("data Factory get should call success function on http status 200", function(){
		var data = "...success..";
		var params = {};
		// var callSuccess = function(response){
		// 	console.log('callSuccess', response);
		// 	expect(response).to.be.eql(data);
		// 	done();
		// }

		httpBackend.expectGET('getTest')
				   .respond(200, data);

		
		var promise = factory.get('getTest', params);//.then(callSuccess);
		
		expect(promise).to.eventually.eql(data);
		httpBackend.flush();


	})
	it("data Factory get should call success function on http status 200", function(){
		var data = "...success..";
		var params = {
            'per_page' : 60,
            'safesearch':true,
            'editors_choice': true
            };
		var url = 'getTest?editors_choice=true&per_page=60&safesearch=true';
		httpBackend.expect('GET',url)
				   .respond(200, data);

		
		var promise = factory.get('getTest', params);
		
		expect(promise).to.eventually.eql(data);
		httpBackend.flush();

	})
	it("data Factory get should call error function on http status 500", function(){
		var error = "... server error..";
		httpBackend.expect('GET','getTest')
				   .respond(500, error);

		
		var promise = factory.get('getTest', {});
		
		expect(promise).to.be.rejectedWith(error);
		httpBackend.flush();

	})
	it("data Factory get should call error function on http status 400", function(){
		var error = "...not found..";
		httpBackend.expect('GET','getTest')
				   .respond(400, error);

		
		var promise = factory.get('getTest', {});
		
		expect(promise).to.be.rejectedWith(error);
		httpBackend.flush();

	})
	it("getImages should call get with pixaby url", function(){
		var api_key = '2609877-2616e4bfd203b2577b07cd8e6';
        var image_params = {
            'key': api_key,
            'per_page' : 20,
            'safesearch':true,
            'editors_choice': true
            };
		var url = 'https://pixabay.com/api';

		var dataFactoryMock = sandbox.mock(factory);

		dataFactoryMock.expects('get').withArgs(url, image_params);
		
		var promise = factory.getImages();
		
		dataFactoryMock.verify();

	})

	it("getImages should return promise ", function(){
		var dataFactoryStub = sandbox.stub(factory, 'get')
									 .returns(defered.promise);

		
		var promise = factory.getImages();
		expect(promise).to.be.eql(defered.promise);

	})
})