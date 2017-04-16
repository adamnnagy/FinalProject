var rectangles = [];
var defaultHeight = 75;
var numberOfRectangles = 30;
var start;
var interval = 20;



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
  }

  console.log('version 1.0');



}

function draw() {


  background(250);

  translate(width/2, height/2);

  var level = amplitude.getLevel();


  if (false) {
    colorTo1 = color(232, 215, 92);

  } else {
    colorYellowish = color(232, 215, 92);
    collorBlueish = color(25, 82, 99);
    gradient = map(level, 0, 0.15, 0, 1);
    colorTo1 = lerpColor(collorBlueish, colorYellowish, gradient);

  }


  for (var i = rectangles.length - 1; i > 0; i--) {

    strokeWeight(0.05);

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


  for (var i = 0; i < sounds.length; i++) {
    rectMode(CORNER);
    //rect(-width/2) //The rectangles should be on the screen!!! -- for playback
    if (sounds[i].isPlaying()) {
      sounds[i].duration();
    }
  }

}
