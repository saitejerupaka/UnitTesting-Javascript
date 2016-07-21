(function(app) {
  app.TagsDirective = ng.core
  	 .Component({
  	 	selector: 'tag',
      	templateUrl: 'tag.directive.html',
      	inputs:[
      	'tags'
      	]

  	 })
  	 .Class({
  	 	constructor: [
  	 	function(){
  	 		console.log("directive");
  	 		this.tags = [];

  	 	}],
  	 	onClick: function(){
  	 		window.open("https://amzn.com/B0093GMEQK", '_blank');
  	 	}
  	 });

})(window.app || (window.app = {}));