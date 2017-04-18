var rectangles = [];
var defaultHeight = 75;
var numberOfRectangles = 30;
var start;
var interval = 20;
var firstRun = true;
var fft, filterr;

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

  console.log('version 1.1');
  textFont("Helvetica");

  filterr = new p5.BandPass();
  fft = new p5.FFT();

}

function draw() {

  background(250);

  push();
  translate(width/2, height/2);



  var level = amplitude.getLevel();


  if (false) {
    colorTo1 = color(232, 215, 92);

  } else {
    colorYellowish = color(232, 215, 92);
    colorBlueish = color(25, 82, 99);
    gradient = map(level, 0, 0.15, 0, 1);
    colorTo1 = lerpColor(colorBlueish, colorYellowish, gradient);

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
    ellipse(0, 12, 5);

  }

  pop();

//SOUND rectangles

rectMode(CORNER);
var columnWidth = 30;
var columnHeight = 80;
var gap = 50;


var offset = (columnWidth+gap)*sounds.length/2*(-1);

translate(windowWidth/2, windowHeight - 100);


for (var i = 0; i < sounds.length; i++) {

    stroke(100);
    fill(200);

    rect(offset+(columnWidth+gap)*i, 0, columnWidth, columnHeight);
    textFont("Helvetica");
    textSize(20);
    textAlign(CENTER);
    text(description[i], offset+(columnWidth+gap)*i+columnWidth/2, -2);
}


    for (var i = 0; i < sounds.length; i++) {

      if (sounds[i].isPlaying()) {

        noStroke();
        fill(0);


        sampleTime = map(sounds[i].currentTime(), 0, sounds[i].duration(), 0, columnHeight);

        rect(offset+i*(columnWidth+gap), 0, columnWidth, sampleTime);

      }

  }
      // pop();                                    // POP()! THE STYLE


      if (firstRun){
        push();
        fill(0);
        noStroke();
        textAlign(CENTER);
        textSize(50);
        textFont('Helvetica');
        text('Use the buttons ASDF and JKL; to play music!', 0, - windowHeight/2);



        pop();

      }
      if (keyIsPressed === true) {
        firstRun = false;

      }


      var freq = map(mouseX, 0, width, 20, 10000);
      filterr.freq(freq);
      filterr.res(50);

}
