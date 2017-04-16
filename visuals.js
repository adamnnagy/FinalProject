
var rectangles = [];
var defaultHeight = 75;
var numberOfRectangles = 30;

function setup(){
  colorMode(RGB);
  // createCanvas(600*0.71, 600);
  createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
  ellipseMode(CENTER);

  // noStroke();

  colorFrom1 = color(36, 27, 45);
  colorTo1 = color(25, 82, 99);

  colorFrom2 = color(18, 103, 122);
  colorTo2 = color(10, 54, 65);


  for (var i = 0; i < numberOfRectangles; i++) {
    rectangles[i] = new Rectangle(defaultHeight*i);
    console.log(rectangles[i].width);
  }

}

function draw() {

  background(250);

  translate(width/2, height/2);




for (var i = rectangles.length - 1; i > 0; i--) {

  strokeWeight(0.05);
  stroke(14, 92, 111);
  gradient = map(i, rectangles.length - 1, 1, 1, 0);
  stroke(lerpColor(colorFrom2, colorTo2, gradient));

  fill(lerpColor(colorFrom1, colorTo1, gradient));
  rectangles[i].update();
  rectangles[i].display();



}

for (var i = 0; i < 8; i++) {

  rotate(TWO_PI*i/8);
  strokeWeight(0.1);
  stroke(20);
  fill(247, 245, 237, 130);
  ellipse(0, 17, 5);

}

	//could analyze sound in the final project -- and do the coloring according to that.
	//also playing the instrument: nature
	//rotate rectangle 1

}
