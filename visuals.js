var rectangles = [];
var defaultHeight = 75;
var numberOfRectangles = 30;
var start;
var interval = 20;
var firstRun = true;
var fft, filterr;

function setup() {

  colorMode(RGB);

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);

  colorFrom1 = color(36, 27, 45);
  colorTo1 = color(25, 82, 99);

  colorFrom2 = color(18, 103, 122);
  colorTo2 = color(10, 54, 65);


  for (var i = 0; i < numberOfRectangles; i++) {
    rectangles[i] = new Rectangle(defaultHeight * i);
  }

  console.log('version 1.1');
  textFont("Helvetica");

  filterr = new p5.BandPass();
  fft = new p5.FFT();

  myIntroText = new introText;

}

function draw() {

  background(250);

  push();
  translate(width / 2, height / 2);



  var level = amplitude.getLevel();


  color(232, 215, 92);


  colorYellowish = color(232, 215, 92);
  colorBlueish = color(25, 82, 99);
  gradient = map(level, 0, 0.15, 0, 1);
  colorTo1 = lerpColor(colorBlueish, colorYellowish, gradient);
  gradient = map(mouseX, 0, width, 0, 1);
  colorFrom1 = lerpColor(color(36, 27, 45), color(74, 132, 226), gradient);



  for (var i = rectangles.length - 1; i > 0; i--) {

    strokeWeight(0.05);

    gradient = map(i, rectangles.length - 1, 1, 1, 0);
    stroke(lerpColor(colorFrom2, colorTo2, gradient));
    fill(lerpColor(colorFrom1, colorTo1, gradient));
    rectangles[i].update();
    rectangles[i].display();

  }

  for (var i = 0; i < 8; i++) {

    rotate(TWO_PI * i / 8);
    strokeWeight(0.1);
    stroke(20);
    fill(247, 245, 237, 130);
    ellipse(0, 12, 5);

  }

  pop();

  //SOUND rectangles

  rectMode(CORNER);
  var columnWidth = 30;
  var columnHeight = 80;
  var gap = 70;


  var offset = (columnWidth + gap) * sounds.length / 2 * (-1);

  translate(windowWidth / 2, windowHeight - 100);


  for (var i = 0; i < sounds.length; i++) {

    stroke(100);
    fill(200);

    rect(offset + (columnWidth + gap) * i, 0, columnWidth, columnHeight);
    textFont("Helvetica");
    textSize(20);
    textAlign(CENTER);
    text(description[i], offset + (columnWidth + gap) * i + columnWidth / 2, -2);
  }


  for (var i = 0; i < sounds.length; i++) {

    if (sounds[i].isPlaying()) {

      noStroke();
      fill(0);


      sampleTime = map(sounds[i].currentTime(), 0, sounds[i].duration(), 0, columnHeight);

      rect(offset + i * (columnWidth + gap), 0, columnWidth, sampleTime);

    }

  }


  if (firstRun) {

    myIntroText.display();
  } else {
    myIntroText.display();
    myIntroText.fade();

  }

  if (keyIsPressed === true) {
    firstRun = false;

  }


  for (var i = 0; i < soundsClass.length; i++) {
    if (i < 4) {
      var panning = map(mouseX, 0., width, -1, 1);

      soundsClass[i].audioFile.pan(panning);
    } else {
      var panning = map(mouseX, 0., width, 1, -1);

      soundsClass[i].audioFile.pan(panning);

    }
  }


}
