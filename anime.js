(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anime_atlas_1", frames: [[0,0,2048,2048]]},
		{name:"anime_atlas_2", frames: [[0,0,1024,2048]]},
		{name:"anime_atlas_3", frames: [[0,0,1024,1024]]},
		{name:"anime_atlas_4", frames: [[0,0,1024,1024]]},
		{name:"anime_atlas_5", frames: [[0,0,1024,1024]]},
		{name:"anime_atlas_6", frames: [[0,0,1024,1024]]},
		{name:"anime_atlas_7", frames: [[0,0,1024,1024]]},
		{name:"anime_atlas_8", frames: [[0,0,1024,1024]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["anime_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["anime_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["anime_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["anime_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["anime_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["anime_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["anime_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["anime_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsGMHIAA4NIYNAAIAAYNg");
	mask.setTransform(77.525,77.525);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1514,0.1514);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgjtAjuMAAAhHbMBHbAAAMAAABHbg");
	mask_1.setTransform(228.625,228.625);

	// Layer_3
	this.instance_1 = new lib.Image_7();
	this.instance_1.setTransform(0,0,0.4466,0.4466);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,457.3,457.3), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A9hdiMAAAg7DMA7DAAAMAAAA7Dg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.Image_6();
	this.instance_2.setTransform(0,0,0.3691,0.3691);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask.setTransform(290.3,290.3);

	// Layer_3
	this.instance = new lib.Image_5();
	this.instance.setTransform(0,0,0.2835,0.2835);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_1.setTransform(92.45,184.9);

	// Layer_3
	this.instance_1 = new lib.Image_4();
	this.instance_1.setTransform(0,0,0.1806,0.1806);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AozI0IAAxnIRnAAIAARng");
	mask_3.setTransform(56.4,56.4);

	// Layer_3
	this.instance_3 = new lib.Image_3();
	this.instance_3.setTransform(0,0,0.1102,0.1102);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,112.8,112.8), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AogIhIAAxBIRBAAIAARBg");
	mask_4.setTransform(54.45,54.45);

	// Layer_3
	this.instance_4 = new lib.Image_2();
	this.instance_4.setTransform(0,0,0.1063,0.1063);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,108.9,108.9), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AsyMzIAA5lIZlAAIAAZlg");
	mask_5.setTransform(81.9,81.9);

	// Layer_3
	this.instance_5 = new lib.Image_1();
	this.instance_5.setTransform(0,0,0.16,0.16);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(0,0,163.8,163.8), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoSI2QjdjPgXkuIAAhxQAWkpDYjOQDZjPEsgIIAlAAQCbAFCNA9QCIA9BoBrQBoBrA6CJQA6COAACaQABCdg+CRQg6CLhrBrQhsBriMA6QiPA+idgBQkyABjgjRg");
	mask.setTransform(77.45,77.45);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,154.9,154.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgN4Ag5Qmbitk7k8Qk9k8iumbQizmoAAnRQAAnQCzmoQCumbE9k7QE7k9GbiuQGoizHQAAQHQAAGpCzQGaCuE9E9QE8E7CtGbQC0GoAAHQQAAHRi0GoQitGbk8E8Qk9E8maCtQmpC0nQAAQnQAAmoi0g");
	mask_1.setTransform(228.5,228.5);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(228.7,228.7,1,1,0,0,0,228.7,228.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,457,457), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrdiQl5gJlXiYQlMiTj+kEQkAkFiLlPQiRlbAAl7QABl/CUlfQCQlTEFkGQEFkGFUiPQFfiVGAAAQF6AAFcCRQFOCLEFD/QEED/CTFMQCYFXAJF5IAABYQgJF0iTFSQiQFIj+D+Qj9D+lICPQlTCTlzAJg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(189,189,1,1,0,0,0,189,189);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AogUKQj7hqjCjCQjBjChrj7QhukFAAkcQAAkcBukEQBrj8DBjBQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDBBqD8QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDCj7BqQkEBukdAAQkcAAkEhug");
	mask_6.setTransform(191.2,189.55);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_1();
	this.instance_6.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_6, new cjs.Rectangle(51.2,49.6,280,280), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask_3.setTransform(290.3,290.3);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_0_6();
	this.instance_3.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AlgNEQijhEh+h+Qh9h+hFijQhHipAAi4QAAi4BHioQBFijB9h9QB+h+CjhFQCphHC3gBQC4ABCqBHQCiBFB+B+QB+B9BECjQBHCoABC4QgBC4hHCpQhECjh+B+Qh+B+iiBEQiqBHi4AAQi3AAiphHg");
	mask_7.setTransform(91.55,91.6);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_7, new cjs.Rectangle(0.8,0.9,181.5,181.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_4.setTransform(92.45,184.9);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_0_7();
	this.instance_4.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AmIGJQijijAAjmQAAjlCjijQCjiiDlAAQDmAACjCiQCjCjAADlQAADmijCjQiiCijnAAQjlAAijiig");
	mask_5.setTransform(56.475,56.475);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_0_3();
	this.instance_5.setTransform(56.4,56.4,1,1,0,0,0,56.4,56.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.9,1,111.19999999999999,111), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Al7F7QididABjeQgBjdCdidQCdidDeAAQDeAACdCdQCeCdAADdQAADeieCdQidCdjeAAQjeAAididg");
	mask_6.setTransform(54.25,54.475);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_0_4();
	this.instance_6.setTransform(54.5,54.5,1,1,0,0,0,54.5,54.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.6,0.9,107.30000000000001,107.19999999999999), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ak5LnQiRg9hvhwQhwhvg9iRQhAiWAAikQAAijBAiVQA9iSBwhvQBvhwCRg8QCWhACjAAQCkAACWBAQCRA8BwBwQBvBvA9CSQBACVAACjQAACkhACWQg9CRhvBvQhwBwiRA9QiWA/ikAAQijAAiWg/g");
	mask_7.setTransform(81.875,81.9);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_0_5();
	this.instance_7.setTransform(81.9,81.9,1,1,0,0,0,81.9,81.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(1.2,1.3,161.4,161.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(82.55,82.55,0.3606,0.3606,0,0,0,229,229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi9, new cjs.Rectangle(0,0,164.9,164.9), null);


(lib.kisi8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(55.5,55.45,1,1,0,0,0,56.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi8, new cjs.Rectangle(-0.9,-0.9,112.9,112.80000000000001), null);


(lib.kisi6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(91.7,184.05,1,1,0,0,0,92.5,184.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi6, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


(lib.kisi5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(159.8,160.9,0.6683,0.6683,0,0,0,290.3,290.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi5, new cjs.Rectangle(-34.2,-33.1,388,388), null);


(lib.kisi4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(59.65,59.6,0.7396,0.7396,0,0,0,81.9,81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi4, new cjs.Rectangle(-0.9,-0.9,121.2,121.10000000000001), null);


(lib.kisi3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(63,63.05,0.3331,0.3331,0,0,0,189.2,189.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi3, new cjs.Rectangle(0,0,125.9,125.9), null);


(lib.kisi2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(70,69.65,1.2993,1.2993,0,0,0,54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi2, new cjs.Rectangle(-0.8,-1.1,141.5,141.5), null);


(lib.kisi1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi6();
	this.instance.setTransform(91.7,184.1,1,1,0,0,0,91.7,184.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi10, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi9();
	this.instance.setTransform(496.05,150,0.041,0.041,0,0,0,81.7,82.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:82.4,regY:82.4,scaleX:0.0958,scaleY:0.0958,x:476.05,y:149.95},0).wait(1).to({scaleX:0.1505,scaleY:0.1505,x:456.1,y:149.9},0).wait(1).to({scaleX:0.205,scaleY:0.205,x:436.25},0).wait(1).to({scaleX:0.2594,scaleY:0.2594,x:416.4,y:149.85},0).wait(1).to({scaleX:0.3136,scaleY:0.3136,x:396.65},0).wait(1).to({scaleX:0.3676,scaleY:0.3676,x:376.9,y:149.8},0).wait(1).to({scaleX:0.4216,scaleY:0.4216,x:357.25},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:337.6,y:149.75},0).wait(1).to({scaleX:0.5289,scaleY:0.5289,x:318.1},0).wait(1).to({scaleX:0.5824,scaleY:0.5824,x:298.6},0).wait(1).to({scaleX:0.6357,scaleY:0.6357,x:279.15,y:149.7},0).wait(1).to({scaleX:0.6888,scaleY:0.6888,x:259.75,y:149.65},0).wait(1).to({scaleX:0.7418,scaleY:0.7418,x:240.4,y:149.6},0).wait(1).to({scaleX:0.7946,scaleY:0.7946,x:221.15},0).wait(1).to({scaleX:0.8473,scaleY:0.8473,x:201.95},0).wait(1).to({scaleX:0.8998,scaleY:0.8998,x:182.8},0).wait(1).to({scaleX:0.9521,scaleY:0.9521,x:163.7,y:149.55},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:159.3},0).wait(34).to({scaleX:0.9479,scaleY:0.9479},0).wait(1).to({scaleX:0.9146,scaleY:0.9146,x:159.25},0).wait(1).to({scaleX:0.8813,scaleY:0.8813,x:159.2},0).wait(1).to({scaleX:0.8482,scaleY:0.8482,y:149.6},0).wait(1).to({scaleX:0.8153,scaleY:0.8153,y:149.65},0).wait(1).to({scaleX:0.7824,scaleY:0.7824,x:159.15,y:149.6},0).wait(1).to({scaleX:0.7496,scaleY:0.7496,x:159.1},0).wait(1).to({scaleX:0.7169,scaleY:0.7169,x:159.15,y:149.7},0).wait(1).to({scaleX:0.6844,scaleY:0.6844,x:159.1,y:149.65},0).wait(1).to({scaleX:0.652,scaleY:0.652,x:159.05},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,y:149.7},0).wait(1).to({scaleX:0.5874,scaleY:0.5874,x:159},0).wait(1).to({scaleX:0.5553,scaleY:0.5553},0).wait(1).to({scaleX:0.5233,scaleY:0.5233,x:158.95},0).wait(1).to({scaleX:0.4914,scaleY:0.4914,y:149.75},0).wait(1).to({scaleX:0.4596,scaleY:0.4596,x:158.9},0).wait(1).to({scaleX:0.4279,scaleY:0.4279},0).wait(1).to({scaleX:0.3964,scaleY:0.3964,x:158.85,y:149.8},0).wait(1).to({scaleX:0.3649,scaleY:0.3649},0).wait(1).to({scaleX:0.3336,scaleY:0.3336,y:149.85},0).wait(1).to({scaleX:0.3024,scaleY:0.3024,x:158.8,y:149.8},0).wait(1).to({scaleX:0.2712,scaleY:0.2712,y:149.85},0).wait(1).to({scaleX:0.2402,scaleY:0.2402,x:158.75},0).wait(1).to({scaleX:0.2093,scaleY:0.2093,y:149.9},0).wait(1).to({scaleX:0.1785,scaleY:0.1785,x:158.7},0).wait(1).to({scaleX:0.1478,scaleY:0.1478,y:149.95},0).wait(1).to({scaleX:0.1173,scaleY:0.1173,x:158.65,y:149.9},0).wait(1).to({scaleX:0.0868,scaleY:0.0868,y:149.95},0).wait(1).to({scaleX:0.0564,scaleY:0.0564,x:158.6},0).wait(1).to({scaleX:0.0306,scaleY:0.0306},0).wait(2));

	// Layer_1
	this.instance_1 = new lib.kisi3();
	this.instance_1.setTransform(515.4,147.75,0.0339,0.0339,0,0,0,65,63.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:62.9,regY:62.9,scaleX:0.0635,scaleY:0.0635,x:518.95,y:145.7},0).wait(1).to({scaleX:0.093,scaleY:0.093,x:522.6,y:143.75},0).wait(1).to({scaleX:0.1224,scaleY:0.1224,x:526.25,y:141.75},0).wait(1).to({scaleX:0.1518,scaleY:0.1518,x:529.85,y:139.8},0).wait(1).to({scaleX:0.181,scaleY:0.181,x:533.5,y:137.85},0).wait(1).to({scaleX:0.2102,scaleY:0.2102,x:537.05,y:135.85},0).wait(1).to({scaleX:0.2392,scaleY:0.2392,x:540.65,y:133.9},0).wait(1).to({scaleX:0.2682,scaleY:0.2682,x:544.2,y:131.95},0).wait(1).to({scaleX:0.2971,scaleY:0.2971,x:547.8,y:130.05},0).wait(1).to({scaleX:0.3259,scaleY:0.3259,x:551.35,y:128.1},0).wait(1).to({scaleX:0.3546,scaleY:0.3546,x:554.9,y:126.2},0).wait(1).to({scaleX:0.3832,scaleY:0.3832,x:558.4,y:124.25},0).wait(1).to({scaleX:0.4117,scaleY:0.4117,x:561.95,y:122.35},0).wait(1).to({scaleX:0.4401,scaleY:0.4401,x:565.45,y:120.45},0).wait(1).to({scaleX:0.4684,scaleY:0.4684,x:568.95,y:118.55},0).wait(1).to({scaleX:0.4966,scaleY:0.4966,x:572.45,y:116.65},0).wait(1).to({scaleX:0.5247,scaleY:0.5247,x:575.9,y:114.75},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:579.35,y:112.85},0).wait(1).to({scaleX:0.5807,scaleY:0.5807,x:582.85,y:111},0).wait(1).to({scaleX:0.6086,scaleY:0.6086,x:586.25,y:109.15},0).wait(1).to({scaleX:0.6363,scaleY:0.6363,x:589.65,y:107.25},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:593.05,y:105.4},0).wait(1).to({scaleX:0.6915,scaleY:0.6915,x:596.5,y:103.55},0).wait(1).to({scaleX:0.719,scaleY:0.719,x:599.9,y:101.75},0).wait(1).to({scaleX:0.7464,scaleY:0.7464,x:603.25,y:99.9},0).wait(1).to({scaleX:0.7737,scaleY:0.7737,x:606.6,y:98.05},0).wait(1).to({scaleX:0.7953,scaleY:0.7953,x:609.3,y:96.6},0).wait(22).to({scaleX:0.7922,scaleY:0.7922},0).wait(1).to({scaleX:0.7607,scaleY:0.7607,x:609.35},0).wait(1).to({scaleX:0.7292,scaleY:0.7292,x:609.4},0).wait(1).to({scaleX:0.6979,scaleY:0.6979,x:609.5,y:96.65},0).wait(1).to({scaleX:0.6666,scaleY:0.6666,x:609.6,y:96.7},0).wait(1).to({scaleX:0.6355,scaleY:0.6355,y:96.65},0).wait(1).to({scaleX:0.6045,scaleY:0.6045,x:609.65,y:96.7},0).wait(1).to({scaleX:0.5737,scaleY:0.5737,x:609.75,y:96.75},0).wait(1).to({scaleX:0.5429,scaleY:0.5429,x:609.8},0).wait(1).to({scaleX:0.5123,scaleY:0.5123,x:609.85},0).wait(1).to({scaleX:0.4818,scaleY:0.4818,x:609.95,y:96.8},0).wait(1).to({scaleX:0.4514,scaleY:0.4514,x:610},0).wait(1).to({scaleX:0.4211,scaleY:0.4211,x:610.05,y:96.85},0).wait(1).to({scaleX:0.3909,scaleY:0.3909,x:610.15},0).wait(1).to({scaleX:0.3609,scaleY:0.3609,x:610.2},0).wait(1).to({scaleX:0.331,scaleY:0.331,x:610.25},0).wait(1).to({scaleX:0.3011,scaleY:0.3011,x:610.3,y:96.9},0).wait(1).to({scaleX:0.2715,scaleY:0.2715,x:610.35},0).wait(1).to({scaleX:0.2419,scaleY:0.2419,x:610.4},0).wait(1).to({scaleX:0.2124,scaleY:0.2124,x:610.5,y:96.95},0).wait(1).to({scaleX:0.1831,scaleY:0.1831,x:610.55},0).wait(1).to({scaleX:0.1539,scaleY:0.1539,x:610.65,y:97},0).wait(1).to({scaleX:0.1248,scaleY:0.1248},0).wait(1).to({scaleX:0.0958,scaleY:0.0958,x:610.7},0).wait(1).to({scaleX:0.0669,scaleY:0.0669,x:610.8,y:97.05},0).to({_off:true},1).wait(6));

	// Layer_1
	this.instance_2 = new lib.kisi5();
	this.instance_2.setTransform(455.8,94,0.041,0.041,0,0,0,99.9,97.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:93.6,regY:93.6,scaleX:0.0958,scaleY:0.0958,x:458.1,y:100.4},0).wait(1).to({scaleX:0.1505,scaleY:0.1505,x:460.7,y:107},0).wait(1).to({scaleX:0.2049,scaleY:0.2049,x:463.3,y:113.55},0).wait(1).to({scaleX:0.2592,scaleY:0.2592,x:465.85,y:120.05},0).wait(1).to({scaleX:0.3134,scaleY:0.3134,x:468.4,y:126.6},0).wait(1).to({scaleX:0.3673,scaleY:0.3673,x:470.95,y:133.1},0).wait(1).to({scaleX:0.4211,scaleY:0.4211,x:473.5,y:139.55},0).wait(1).to({scaleX:0.4747,scaleY:0.4747,x:476.05,y:146.05},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,x:478.6,y:152.5},0).wait(1).to({scaleX:0.5814,scaleY:0.5814,x:481.05,y:158.85},0).wait(1).to({scaleX:0.6345,scaleY:0.6345,x:483.6,y:165.3},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:486.1,y:171.65},0).wait(1).to({scaleX:0.7402,scaleY:0.7402,x:488.6,y:178},0).wait(1).to({scaleX:0.7927,scaleY:0.7927,x:491.1,y:184.3},0).wait(1).to({scaleX:0.8451,scaleY:0.8451,x:493.55,y:190.6},0).wait(1).to({scaleX:0.8974,scaleY:0.8974,x:496.05,y:196.9},0).wait(1).to({scaleX:0.9494,scaleY:0.9494,x:498.5,y:203.15},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:499.2,y:204.95},0).wait(28).to({scaleX:0.9565,scaleY:0.9565,x:499.25,y:205},0).wait(1).to({scaleX:0.921,scaleY:0.921,x:499.45,y:205.1},0).wait(1).to({scaleX:0.8858,scaleY:0.8858,x:499.7,y:205.25},0).wait(1).to({scaleX:0.8506,scaleY:0.8506,x:499.9,y:205.4},0).wait(1).to({scaleX:0.8156,scaleY:0.8156,x:500.15,y:205.55},0).wait(1).to({scaleX:0.7807,scaleY:0.7807,x:500.4,y:205.7},0).wait(1).to({scaleX:0.746,scaleY:0.746,x:500.55,y:205.8},0).wait(1).to({scaleX:0.7114,scaleY:0.7114,x:500.8,y:205.95},0).wait(1).to({scaleX:0.6769,scaleY:0.6769,x:501,y:206.1},0).wait(1).to({scaleX:0.6425,scaleY:0.6425,x:501.25,y:206.25},0).wait(1).to({scaleX:0.6083,scaleY:0.6083,x:501.45,y:206.35},0).wait(1).to({scaleX:0.5742,scaleY:0.5742,x:501.65,y:206.5},0).wait(1).to({scaleX:0.5402,scaleY:0.5402,x:501.85,y:206.6},0).wait(1).to({scaleX:0.5064,scaleY:0.5064,x:502.1,y:206.75},0).wait(1).to({scaleX:0.4727,scaleY:0.4727,x:502.3,y:206.9},0).wait(1).to({scaleX:0.4391,scaleY:0.4391,x:502.5,y:207},0).wait(1).to({scaleX:0.4057,scaleY:0.4057,x:502.7,y:207.1},0).wait(1).to({scaleX:0.3724,scaleY:0.3724,x:502.9,y:207.25},0).wait(1).to({scaleX:0.3392,scaleY:0.3392,x:503.15,y:207.4},0).wait(1).to({scaleX:0.3061,scaleY:0.3061,x:503.35,y:207.55},0).wait(1).to({scaleX:0.2732,scaleY:0.2732,x:503.55,y:207.65},0).wait(1).to({scaleX:0.2404,scaleY:0.2404,x:503.75,y:207.8},0).wait(1).to({scaleX:0.2078,scaleY:0.2078,x:503.95,y:207.9},0).wait(1).to({scaleX:0.1752,scaleY:0.1752,x:504.15,y:208.05},0).wait(1).to({scaleX:0.1429,scaleY:0.1429,x:504.35,y:208.15},0).wait(1).to({scaleX:0.1106,scaleY:0.1106,x:504.6,y:208.3},0).wait(1).to({scaleX:0.0784,scaleY:0.0784,x:504.8,y:208.45},0).wait(1).to({scaleX:0.0464,scaleY:0.0464,x:505,y:208.55},0).to({_off:true},1).wait(3));

	// Layer_1
	this.instance_3 = new lib.kisi10();
	this.instance_3.setTransform(490.05,59.75,0.041,0.041,0,0,0,78,87.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:90.8,regY:90.8,scaleX:0.07,scaleY:0.07,x:486.1,y:60.95},0).wait(1).to({scaleX:0.0988,scaleY:0.0988,x:481.65,y:62.05},0).wait(1).to({scaleX:0.1276,scaleY:0.1276,x:477.25,y:63.2},0).wait(1).to({scaleX:0.1562,scaleY:0.1562,x:472.8,y:64.3},0).wait(1).to({scaleX:0.1848,scaleY:0.1848,x:468.4,y:65.4},0).wait(1).to({scaleX:0.2133,scaleY:0.2133,x:464,y:66.45},0).wait(1).to({scaleX:0.2416,scaleY:0.2416,x:459.65,y:67.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:455.25,y:68.65},0).wait(1).to({scaleX:0.2982,scaleY:0.2982,x:450.9,y:69.7},0).wait(1).to({scaleX:0.3263,scaleY:0.3263,x:446.6,y:70.85},0).wait(1).to({scaleX:0.3543,scaleY:0.3543,x:442.25,y:71.9},0).wait(1).to({scaleX:0.3823,scaleY:0.3823,x:437.95,y:72.95},0).wait(1).to({scaleX:0.4101,scaleY:0.4101,x:433.7,y:74.05},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,x:429.4,y:75.1},0).wait(1).to({scaleX:0.4655,scaleY:0.4655,x:425.15,y:76.15},0).wait(1).to({scaleX:0.4931,scaleY:0.4931,x:420.9,y:77.25},0).wait(1).to({scaleX:0.5206,scaleY:0.5206,x:416.65,y:78.3},0).wait(1).to({scaleX:0.548,scaleY:0.548,x:412.45,y:79.35},0).wait(1).to({scaleX:0.5753,scaleY:0.5753,x:408.25,y:80.4},0).wait(1).to({scaleX:0.6026,scaleY:0.6026,x:404,y:81.45},0).wait(1).to({scaleX:0.6297,scaleY:0.6297,x:399.9,y:82.5},0).wait(1).to({scaleX:0.6567,scaleY:0.6567,x:395.7,y:83.55},0).wait(1).to({scaleX:0.6837,scaleY:0.6837,x:391.55,y:84.6},0).wait(1).to({scaleX:0.7105,scaleY:0.7105,x:387.4,y:85.6},0).wait(1).to({scaleX:0.7373,scaleY:0.7373,x:383.3,y:86.65},0).wait(1).to({scaleX:0.764,scaleY:0.764,x:379.15,y:87.65},0).wait(1).to({scaleX:0.7906,scaleY:0.7906,x:375.1,y:88.7},0).wait(1).to({scaleX:0.8171,scaleY:0.8171,x:371,y:89.7},0).wait(1).to({scaleX:0.8435,scaleY:0.8435,x:366.95,y:90.75},0).wait(1).to({scaleX:0.8698,scaleY:0.8698,x:362.9,y:91.75},0).wait(1).to({scaleX:0.896,scaleY:0.896,x:358.8,y:92.75},0).wait(1).to({scaleX:0.9222,scaleY:0.9222,x:354.8,y:93.75},0).wait(1).to({scaleX:0.9482,scaleY:0.9482,x:350.8,y:94.75},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:348.3,y:95.35},0).wait(17).to({scaleX:0.9616,scaleY:0.9616,x:348.25},0).wait(1).to({scaleX:0.9201,scaleY:0.9201,x:347.75,y:95.25},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:347.25,y:95.1},0).wait(1).to({scaleX:0.8377,scaleY:0.8377,x:346.7,y:94.95},0).wait(1).to({scaleX:0.7967,scaleY:0.7967,x:346.2,y:94.85},0).wait(1).to({scaleX:0.7559,scaleY:0.7559,x:345.65,y:94.75},0).wait(1).to({scaleX:0.7151,scaleY:0.7151,x:345.15,y:94.6},0).wait(1).to({scaleX:0.6746,scaleY:0.6746,x:344.6,y:94.5},0).wait(1).to({scaleX:0.6342,scaleY:0.6342,x:344.1,y:94.35},0).wait(1).to({scaleX:0.594,scaleY:0.594,x:343.6,y:94.25},0).wait(1).to({scaleX:0.5539,scaleY:0.5539,x:343.05,y:94.1},0).wait(1).to({scaleX:0.514,scaleY:0.514,x:342.55,y:93.95},0).wait(1).to({scaleX:0.4742,scaleY:0.4742,x:342.05,y:93.85},0).wait(1).to({scaleX:0.4346,scaleY:0.4346,x:341.55,y:93.75},0).wait(1).to({scaleX:0.3952,scaleY:0.3952,x:341.05,y:93.65},0).wait(1).to({scaleX:0.3559,scaleY:0.3559,x:340.5,y:93.5},0).wait(1).to({scaleX:0.3167,scaleY:0.3167,x:340,y:93.4},0).wait(1).to({scaleX:0.2777,scaleY:0.2777,x:339.5,y:93.25},0).wait(1).to({scaleX:0.2388,scaleY:0.2388,x:339.05,y:93.15},0).wait(1).to({scaleX:0.2002,scaleY:0.2002,x:338.5,y:93},0).wait(1).to({scaleX:0.1616,scaleY:0.1616,x:338,y:92.9},0).wait(1).to({scaleX:0.1232,scaleY:0.1232,x:337.55,y:92.8},0).wait(1).to({scaleX:0.085,scaleY:0.085,x:337.05,y:92.65},0).wait(1).to({scaleX:0.0469,scaleY:0.0469,x:336.55,y:92.55},0).to({_off:true},1).wait(7));

	// Layer_1
	this.instance_4 = new lib.kisi8();
	this.instance_4.setTransform(502.35,153.9,0.041,0.041,0,0,0,54.9,56.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:55.6,regY:55.5,scaleX:0.1105,scaleY:0.1105,x:487.7,y:160.45},0).wait(1).to({scaleX:0.1797,scaleY:0.1797,x:473.1,y:166.95},0).wait(1).to({scaleX:0.2487,scaleY:0.2487,x:458.5,y:173.5},0).wait(1).to({scaleX:0.3175,scaleY:0.3175,x:443.95,y:179.95},0).wait(1).to({scaleX:0.3861,scaleY:0.3861,x:429.45,y:186.5},0).wait(1).to({scaleX:0.4545,scaleY:0.4545,x:415,y:192.9},0).wait(1).to({scaleX:0.5227,scaleY:0.5227,x:400.6,y:199.4},0).wait(1).to({scaleX:0.5906,scaleY:0.5906,x:386.25,y:205.85},0).wait(1).to({scaleX:0.6584,scaleY:0.6584,x:371.95,y:212.25},0).wait(1).to({scaleX:0.7259,scaleY:0.7259,x:357.7,y:218.6},0).wait(1).to({scaleX:0.7933,scaleY:0.7933,x:343.45,y:225},0).wait(1).to({scaleX:0.8604,scaleY:0.8604,x:329.3,y:231.35},0).wait(1).to({scaleX:0.9273,scaleY:0.9273,x:315.15,y:237.65},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:307.35,y:241.15},0).wait(33).to({scaleX:0.9535,scaleY:0.9535},0).wait(1).to({scaleX:0.9221,scaleY:0.9221,x:307.3},0).wait(1).to({scaleX:0.8907,scaleY:0.8907,x:307.25,y:241.2},0).wait(1).to({scaleX:0.8596,scaleY:0.8596,x:307.3},0).wait(1).to({scaleX:0.8285,scaleY:0.8285,x:307.25,y:241.25},0).wait(1).to({scaleX:0.7975,scaleY:0.7975},0).wait(1).to({scaleX:0.7666,scaleY:0.7666,x:307.2},0).wait(1).to({scaleX:0.7359,scaleY:0.7359,x:307.15,y:241.3},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6747,scaleY:0.6747,x:307.1},0).wait(1).to({scaleX:0.6443,scaleY:0.6443},0).wait(1).to({scaleX:0.614,scaleY:0.614,y:241.35},0).wait(1).to({scaleX:0.5838,scaleY:0.5838,x:307.05},0).wait(1).to({scaleX:0.5537,scaleY:0.5537,y:241.4},0).wait(1).to({scaleX:0.5237,scaleY:0.5237,x:307,y:241.35},0).wait(1).to({scaleX:0.4939,scaleY:0.4939,y:241.4},0).wait(1).to({scaleX:0.4641,scaleY:0.4641,x:306.95},0).wait(1).to({scaleX:0.4345,scaleY:0.4345},0).wait(1).to({scaleX:0.4049,scaleY:0.4049,x:306.9,y:241.45},0).wait(1).to({scaleX:0.3755,scaleY:0.3755,x:306.95,y:241.5},0).wait(1).to({scaleX:0.3462,scaleY:0.3462,x:306.9,y:241.45},0).wait(1).to({scaleX:0.317,scaleY:0.317,y:241.5},0).wait(1).to({scaleX:0.2879,scaleY:0.2879,x:306.85,y:241.55},0).wait(1).to({scaleX:0.2589,scaleY:0.2589,x:306.8,y:241.5},0).wait(1).to({scaleX:0.2301,scaleY:0.2301,y:241.55},0).wait(1).to({scaleX:0.2013,scaleY:0.2013},0).wait(1).to({scaleX:0.1727,scaleY:0.1727,x:306.75,y:241.6},0).wait(1).to({scaleX:0.1441,scaleY:0.1441,x:306.7},0).wait(1).to({scaleX:0.1157,scaleY:0.1157,x:306.75},0).wait(1).to({scaleX:0.0874,scaleY:0.0874,x:306.7,y:241.65},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_5 = new lib.kisi2();
	this.instance_5.setTransform(521.15,147.1,0.0404,0.0404,0,0,0,70.5,70.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(1).to({regX:69.7,regY:69.6,scaleX:0.0815,scaleY:0.0815,x:531.35,y:144.05},0).wait(1).to({scaleX:0.1224,scaleY:0.1224,x:541.5,y:141.05},0).wait(1).to({scaleX:0.1632,scaleY:0.1632,x:551.6,y:138.1},0).wait(1).to({scaleX:0.2038,scaleY:0.2038,x:561.75,y:135.2},0).wait(1).to({scaleX:0.2442,scaleY:0.2442,x:571.8,y:132.25},0).wait(1).to({scaleX:0.2845,scaleY:0.2845,x:581.85,y:129.3},0).wait(1).to({scaleX:0.3247,scaleY:0.3247,x:591.85,y:126.4},0).wait(1).to({scaleX:0.3646,scaleY:0.3646,x:601.8,y:123.55},0).wait(1).to({scaleX:0.4045,scaleY:0.4045,x:611.75,y:120.6},0).wait(1).to({scaleX:0.4442,scaleY:0.4442,x:621.6,y:117.7},0).wait(1).to({scaleX:0.4837,scaleY:0.4837,x:631.45,y:114.85},0).wait(1).to({scaleX:0.5231,scaleY:0.5231,x:641.25,y:112},0).wait(1).to({scaleX:0.5623,scaleY:0.5623,x:651,y:109.15},0).wait(1).to({scaleX:0.6014,scaleY:0.6014,x:660.7,y:106.3},0).wait(1).to({scaleX:0.6403,scaleY:0.6403,x:670.45,y:103.45},0).wait(1).to({scaleX:0.6791,scaleY:0.6791,x:680.1,y:100.65},0).wait(1).to({scaleX:0.7177,scaleY:0.7177,x:689.7,y:97.85},0).wait(1).to({scaleX:0.7562,scaleY:0.7562,x:699.25,y:95.1},0).wait(1).to({scaleX:0.7945,scaleY:0.7945,x:708.85,y:92.3},0).wait(1).to({scaleX:0.8327,scaleY:0.8327,x:718.3,y:89.55},0).wait(1).to({scaleX:0.8707,scaleY:0.8707,x:727.8,y:86.75},0).wait(1).to({scaleX:0.9085,scaleY:0.9085,x:737.2,y:84.05},0).wait(1).to({scaleX:0.9462,scaleY:0.9462,x:746.6,y:81.3},0).wait(1).to({scaleX:0.9506,scaleY:0.9506,x:747.65,y:80.95},0).wait(20).to({scaleX:0.9156,scaleY:0.9156,y:81},0).wait(1).to({scaleX:0.8656,scaleY:0.8656,x:747.75,y:81.05},0).wait(1).to({scaleX:0.8158,scaleY:0.8158,y:81.1},0).wait(1).to({scaleX:0.7663,scaleY:0.7663,x:747.8,y:81.15},0).wait(1).to({scaleX:0.7169,scaleY:0.7169,x:747.85,y:81.2},0).wait(1).to({scaleX:0.6679,scaleY:0.6679,x:747.9,y:81.25},0).wait(1).to({scaleX:0.6189,scaleY:0.6189,x:747.95,y:81.3},0).wait(1).to({scaleX:0.5703,scaleY:0.5703},0).wait(1).to({scaleX:0.5219,scaleY:0.5219,x:748,y:81.35},0).wait(1).to({scaleX:0.4736,scaleY:0.4736,x:748.05,y:81.4},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,y:81.45},0).wait(1).to({scaleX:0.3779,scaleY:0.3779,x:748.15,y:81.5},0).wait(1).to({scaleX:0.3303,scaleY:0.3303,y:81.55},0).wait(1).to({scaleX:0.283,scaleY:0.283},0).wait(1).to({scaleX:0.2359,scaleY:0.2359,x:748.25,y:81.6},0).wait(1).to({scaleX:0.189,scaleY:0.189,y:81.65},0).wait(1).to({scaleX:0.1423,scaleY:0.1423,x:748.3,y:81.7},0).wait(1).to({scaleX:0.0959,scaleY:0.0959,x:748.35,y:81.75},0).wait(1).to({scaleX:0.0497,scaleY:0.0497,x:748.4,y:81.8},0).to({_off:true},1).wait(11));

	// Layer_1
	this.instance_6 = new lib.kisi4();
	this.instance_6.setTransform(518.5,153.05,0.041,0.041,0,0,0,61,58.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(1).to({regX:59.7,regY:59.6,scaleX:0.0827,scaleY:0.0827,x:525.95,y:156.3},0).wait(1).to({scaleX:0.1242,scaleY:0.1242,x:533.4,y:159.45},0).wait(1).to({scaleX:0.1656,scaleY:0.1656,x:540.9,y:162.6},0).wait(1).to({scaleX:0.2069,scaleY:0.2069,x:548.35,y:165.8},0).wait(1).to({scaleX:0.248,scaleY:0.248,x:555.75,y:168.95},0).wait(1).to({scaleX:0.2891,scaleY:0.2891,x:563.15,y:172.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:570.55,y:175.2},0).wait(1).to({scaleX:0.3708,scaleY:0.3708,x:577.9,y:178.35},0).wait(1).to({scaleX:0.4114,scaleY:0.4114,x:585.2,y:181.45},0).wait(1).to({scaleX:0.4519,scaleY:0.4519,x:592.55,y:184.6},0).wait(1).to({scaleX:0.4923,scaleY:0.4923,x:599.8,y:187.7},0).wait(1).to({scaleX:0.5325,scaleY:0.5325,x:607.05,y:190.8},0).wait(1).to({scaleX:0.5727,scaleY:0.5727,x:614.3,y:193.85},0).wait(1).to({scaleX:0.6127,scaleY:0.6127,x:621.55,y:196.9},0).wait(1).to({scaleX:0.6526,scaleY:0.6526,x:628.7,y:200},0).wait(1).to({scaleX:0.6923,scaleY:0.6923,x:635.9,y:203},0).wait(1).to({scaleX:0.7319,scaleY:0.7319,x:643.05,y:206.05},0).wait(1).to({scaleX:0.7714,scaleY:0.7714,x:650.15,y:209.05},0).wait(1).to({scaleX:0.8107,scaleY:0.8107,x:657.25,y:212.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:664.3,y:215.1},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:671.4,y:218.15},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:678.4,y:221.1},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:684.9,y:223.85},0).wait(26).to({scaleX:0.9562,scaleY:0.9562,x:684.95,y:223.9},0).wait(1).to({scaleX:0.9195,scaleY:0.9195,x:685,y:223.85},0).wait(1).to({scaleX:0.8828,scaleY:0.8828,y:223.8},0).wait(1).to({scaleX:0.8463,scaleY:0.8463,x:685.05,y:223.75},0).wait(1).to({scaleX:0.8099,scaleY:0.8099,x:685.1,y:223.7},0).wait(1).to({scaleX:0.7736,scaleY:0.7736,x:685.15,y:223.65},0).wait(1).to({scaleX:0.7375,scaleY:0.7375,x:685.25},0).wait(1).to({scaleX:0.7015,scaleY:0.7015,y:223.6},0).wait(1).to({scaleX:0.6656,scaleY:0.6656,x:685.3,y:223.55},0).wait(1).to({scaleX:0.6299,scaleY:0.6299,x:685.35},0).wait(1).to({scaleX:0.5943,scaleY:0.5943,x:685.4,y:223.45},0).wait(1).to({scaleX:0.5588,scaleY:0.5588},0).wait(1).to({scaleX:0.5235,scaleY:0.5235,x:685.45,y:223.4},0).wait(1).to({scaleX:0.4883,scaleY:0.4883,x:685.5,y:223.35},0).wait(1).to({scaleX:0.4533,scaleY:0.4533,x:685.55,y:223.3},0).wait(1).to({scaleX:0.4184,scaleY:0.4184,x:685.65},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,y:223.25},0).wait(1).to({scaleX:0.3489,scaleY:0.3489,x:685.7,y:223.2},0).wait(1).to({scaleX:0.3144,scaleY:0.3144},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:685.75,y:223.15},0).wait(1).to({scaleX:0.2457,scaleY:0.2457,x:685.8,y:223.1},0).wait(1).to({scaleX:0.2116,scaleY:0.2116,x:685.9,y:223.05},0).wait(1).to({scaleX:0.1776,scaleY:0.1776},0).wait(1).to({scaleX:0.1437,scaleY:0.1437,x:685.95,y:222.95},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.0764,scaleY:0.0764,x:686,y:222.9},0).wait(1).to({scaleX:0.0429,scaleY:0.0429,x:686.05,y:222.85},0).to({_off:true},1).wait(4));

	// Layer_1
	this.instance_7 = new lib.kisi1();
	this.instance_7.setTransform(526.3,152.35,0.041,0.041,0,0,0,78,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:77.5,regY:77.5,scaleX:0.0692,scaleY:0.0692,x:536.7,y:153.95},0).wait(1).to({scaleX:0.0972,scaleY:0.0972,x:547.15,y:155.6},0).wait(1).to({scaleX:0.1252,scaleY:0.1252,x:557.5,y:157.2},0).wait(1).to({scaleX:0.1531,scaleY:0.1531,x:567.85,y:158.8},0).wait(1).to({scaleX:0.181,scaleY:0.181,x:578.15,y:160.4},0).wait(1).to({scaleX:0.2087,scaleY:0.2087,x:588.45,y:162},0).wait(1).to({scaleX:0.2364,scaleY:0.2364,x:598.75,y:163.65},0).wait(1).to({scaleX:0.2639,scaleY:0.2639,x:609,y:165.25},0).wait(1).to({scaleX:0.2914,scaleY:0.2914,x:619.2,y:166.85},0).wait(1).to({scaleX:0.3189,scaleY:0.3189,x:629.35,y:168.4},0).wait(1).to({scaleX:0.3462,scaleY:0.3462,x:639.55,y:170.05},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,x:649.65,y:171.6},0).wait(1).to({scaleX:0.4006,scaleY:0.4006,x:659.75,y:173.2},0).wait(1).to({scaleX:0.4277,scaleY:0.4277,x:669.8,y:174.75},0).wait(1).to({scaleX:0.4547,scaleY:0.4547,x:679.8,y:176.35},0).wait(1).to({scaleX:0.4816,scaleY:0.4816,x:689.85,y:177.9},0).wait(1).to({scaleX:0.5085,scaleY:0.5085,x:699.75,y:179.45},0).wait(1).to({scaleX:0.5352,scaleY:0.5352,x:709.7,y:181},0).wait(1).to({scaleX:0.5619,scaleY:0.5619,x:719.6,y:182.55},0).wait(1).to({scaleX:0.5885,scaleY:0.5885,x:729.45,y:184.1},0).wait(1).to({scaleX:0.615,scaleY:0.615,x:739.3,y:185.6},0).wait(1).to({scaleX:0.6414,scaleY:0.6414,x:749.1,y:187.15},0).wait(1).to({scaleX:0.6678,scaleY:0.6678,x:758.9,y:188.7},0).wait(1).to({scaleX:0.694,scaleY:0.694,x:768.65,y:190.2},0).wait(1).to({scaleX:0.7202,scaleY:0.7202,x:778.35,y:191.7},0).wait(1).to({scaleX:0.7463,scaleY:0.7463,x:788.05,y:193.25},0).wait(1).to({scaleX:0.7723,scaleY:0.7723,x:797.7,y:194.75},0).wait(1).to({scaleX:0.7983,scaleY:0.7983,x:807.35,y:196.25},0).wait(1).to({scaleX:0.8241,scaleY:0.8241,x:816.95,y:197.75},0).wait(1).to({scaleX:0.8499,scaleY:0.8499,x:826.5,y:199.25},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,x:836.05,y:200.75},0).wait(1).to({scaleX:0.9012,scaleY:0.9012,x:845.55,y:202.25},0).wait(1).to({scaleX:0.9267,scaleY:0.9267,x:855,y:203.7},0).wait(1).to({scaleX:0.9522,scaleY:0.9522,x:864.5,y:205.2},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,x:868.95,y:205.9},0).wait(17).to({scaleX:0.9527,scaleY:0.9527},0).wait(1).to({scaleX:0.917,scaleY:0.917},0).wait(1).to({scaleX:0.8815,scaleY:0.8815},0).wait(1).to({scaleX:0.846,scaleY:0.846,x:869,y:205.95},0).wait(1).to({scaleX:0.8107,scaleY:0.8107,x:869.05,y:206},0).wait(1).to({scaleX:0.7755,scaleY:0.7755},0).wait(1).to({scaleX:0.7405,scaleY:0.7405},0).wait(1).to({scaleX:0.7056,scaleY:0.7056,x:869.1,y:206.05},0).wait(1).to({scaleX:0.6708,scaleY:0.6708},0).wait(1).to({scaleX:0.6361,scaleY:0.6361},0).wait(1).to({scaleX:0.6015,scaleY:0.6015},0).wait(1).to({scaleX:0.567,scaleY:0.567,x:869.15,y:206.1},0).wait(1).to({scaleX:0.5327,scaleY:0.5327},0).wait(1).to({scaleX:0.4985,scaleY:0.4985,x:869.2,y:206.15},0).wait(1).to({scaleX:0.4645,scaleY:0.4645},0).wait(1).to({scaleX:0.4305,scaleY:0.4305},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:869.25,y:206.2},0).wait(1).to({scaleX:0.3629,scaleY:0.3629},0).wait(1).to({scaleX:0.3294,scaleY:0.3294,x:869.3,y:206.25},0).wait(1).to({scaleX:0.2959,scaleY:0.2959},0).wait(1).to({scaleX:0.2626,scaleY:0.2626},0).wait(1).to({scaleX:0.2294,scaleY:0.2294},0).wait(1).to({scaleX:0.1963,scaleY:0.1963},0).wait(1).to({scaleX:0.1633,scaleY:0.1633,x:869.35,y:206.3},0).wait(1).to({scaleX:0.1304,scaleY:0.1304},0).wait(1).to({scaleX:0.0977,scaleY:0.0977},0).wait(1).to({scaleX:0.0651,scaleY:0.0651,x:869.4,y:206.35},0).wait(1).to({scaleX:0.0326,scaleY:0.0326,x:869.45,y:206.4},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(591.9,157.8,351.80000000000007,137.39999999999998);
// library properties:
lib.properties = {
	id: '9C8C372532E14B36A74561EA2785E00C',
	width: 1024,
	height: 300,
	fps: 24,
	color: "#CCCCCC",
	opacity: 0.00,
	manifest: [
		{src:"images/anime_atlas_1.png", id:"anime_atlas_1"},
		{src:"images/anime_atlas_2.png", id:"anime_atlas_2"},
		{src:"images/anime_atlas_3.png", id:"anime_atlas_3"},
		{src:"images/anime_atlas_4.png", id:"anime_atlas_4"},
		{src:"images/anime_atlas_5.png", id:"anime_atlas_5"},
		{src:"images/anime_atlas_6.png", id:"anime_atlas_6"},
		{src:"images/anime_atlas_7.png", id:"anime_atlas_7"},
		{src:"images/anime_atlas_8.png", id:"anime_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C8C372532E14B36A74561EA2785E00C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;