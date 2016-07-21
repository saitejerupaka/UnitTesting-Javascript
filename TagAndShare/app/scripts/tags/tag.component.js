(function(app) {
    app.TagsComponent = ng.core
        .Component({
            selector: 'tag-image',
            queries: {
                picTag: new ng.core.ViewChild('picTag')
            }
        })
        .View({
            directives: [app.TagsDirective],
            templateUrl: 'tag-component.html'
        })
        .Class({
            constructor: [

                function() {
                    this.X = 0;
                    this.Y = 0;
                    this.originalTags = [];
                    this.scaledTags = [];
                }
            ],
            scaleTag: function(X, Y) {
                console.log('controller', X, Y);
                
                var naturalHeight = this.picTag.nativeElement.naturalHeight;
                var naturalWidth = this.picTag.nativeElement.naturalWidth;
                var heightRatio = naturalHeight / 100;
                var widthRatio = naturalWidth / 200;
                var scaledX = (X * widthRatio * 300) / naturalWidth;
                var scaledY = (Y * heightRatio * 300) / naturalHeight;
                
                var left = (X - 5);
                var top = (Y - 5);
                
                this.originalTags.push({
                    left: left,
                    top: top
                })
                this.scaledTags.push({
                    left: scaledX,
                    top: scaledY
                })
            },

            getMousePos: function(event) {
                var element = event.currentTarget;
                this.X = event.pageX;
                this.Y = event.pageY;

                var parentOffset = event.srcElement.offsetParent;
                var x = event.pageX - element.offsetLeft - parentOffset.offsetLeft;
                var y = event.pageY - element.offsetTop - parentOffset.offsetTop;
                console.log('x:', x, 'y:', y);
                this.scaleTag(x, y);
            }


        });
})(window.app || (window.app = {}));