describe("validate length", function(){
	it("canary test", function(){
		expect(true).to.equal(true);
	});
	it("should return false if answer 1 is less than 7", function(){
		var actual = validateAnswers("", "1234567");
		expect(false).to.equal(actual);
	});
	it("should return true if answer 1 is greater than 7", function(){
		var actual = validateAnswers("saitej9", "1234567");
		expect(true).to.equal(actual);
	});
	it("should return false if answer 2 is less than 7", function(){
		var actual = validateAnswers("1234567", "");
		expect(false).to.equal(actual);
	});
	it("should return true if answer 2 is greater than 7", function(){
		var actual = validateAnswers("saitej9", "1234567");
		expect(true).to.equal(actual);
	});
	it("should return true if both answer 2 and answer 1 is greater than 7",
	 function(){
		var actual = validateAnswers("saitej9", "1234567");
		expect(true).to.equal(actual);
	});
	it("should return false if answer 2 < 7 and answer 1 > 7", function(){
		var actual = validateAnswers("saitej9", "");
		expect(false).to.equal(actual);
	});
	it("should return false if answer 1 < 7 and answer 2 > 7", function(){
		var actual = validateAnswers("", "saitej9");
		expect(false).to.equal(actual);
	});

});


describe("response Message tests", function(){
	var sandbox;
	beforeEach(function createSandBox(){
		sandbox = sinon.sandbox.create();
	});
	afterEach(function restoreSandBox(){
		sandbox.restore();
	});
	it("set response to invalid if input is false", function(){
		var errorDomElement = {innerHTML : ''};
		var getElementByIdStub = sandbox.stub(document, 'getElementById');
		
		getElementByIdStub.withArgs('errorMsg')
			   .returns(errorDomElement);	
		setResponseMessage(false);
		expect(errorDomElement.innerHTML).to.be.equal('invalid');
	});

	it("set response to valid if input is true", function(){
		var errorDomElement = {innerHTML : ''};
		var getElementByIdStub = sandbox.stub(document, 'getElementById');
		getElementByIdStub.withArgs('errorMsg')
			   .returns(errorDomElement);	
		setResponseMessage(true);
		expect(errorDomElement.innerHTML).to.be.equal('valid');
	});

});