describe("submit tests", function(){
	var sandbox;
	beforeEach(function sandboxCreate(){
		sandbox = sinon.sandbox.create();
		var answer1 = 'answer1';
		var answer2 = 'answer2';
		var answer1DomElement = {value : answer1};
		var answer2DomElement = {value : answer2};
		var errorDomElement = {innerHTML : ''};
		var getElementByIdStub = sandbox.stub(document, 'getElementById');
		

		getElementByIdStub.withArgs('errorMsg')
			   			  .returns(errorDomElement);
			   			  
		getElementByIdStub.withArgs('tbAnswer1')
			   .returns(answer1DomElement);

		getElementByIdStub.withArgs('tbAnswer2')
			   .returns(answer2DomElement);
		
	})
	afterEach(function restoreSandBox(){
		sandbox.restore();
	});
	
	it("should call validate method ", function(){
		

		var validateSpy = sandbox.spy(window, 'validateAnswers');

		submit();

		expect(validateSpy.calledWith('answer1','answer2')).to.be.equal(true);
	});

	it("should set responses message based on validation", function() {
		

		var validateStub = sandbox.stub(window, 'validateAnswers').returns(true);

		var setResponseSpy = sandbox.spy(window, 'setResponseMessage');

		submit();

		expect(setResponseSpy.calledWith(true)).to.be.equal(true);
	})

	
});