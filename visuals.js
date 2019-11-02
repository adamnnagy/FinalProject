var rectangles = [];
var defaultHeight = 75;
var numberOfRectangles = 70;
var start;
var interval = 20;
var firstRun = true;
var fft, filterr;
var amplitude = new p5.Amplitude();

//soudns
var sounds = [];

var item;

//individual sounds

var guitar1;
var guitar2;
var guitar3;
var guitar4;
var birds;
var thunder;
var rain;
var water;



var description = [
  'guitar1',
  'guitar2',
  'guitar3',
  'guitar4',
  'birds',
  'thunder',
  'rain',
  'water'
];

var keys = [
  65,
  83,
  68,
  70,
  74,
  75,
  76,
  186
];

var reverbKeys = [
  81, 87, 69, 82,
  85, 73, 79, 80
];

var volumes = [
  0.1, 0.1, 0.1, 0.1,
  0.01, 0.01, 0.001, 0.001,
];


var soundsClass = [];
  // guitar1 = new AudioObj(65, 0.1, '/', 65, 'asdf'),
  // guitar2 = new AudioObj(65, 0.1, '/', 65, 'asdf'),
  // guitar3 = new AudioObj(65, 0.1, '/', 65, 'asdf'),
  // guitar4 = new AudioObj(65, 0.1, '/', 65, 'asdf'),
  // birds = new AudioObj(65, 0.1, '/', 65, 'asdf'),
  // thunder = new AudioObj(65, 0.1, '/', 65, 'asdf'),
  // rain = new AudioObj(65, 0.1, '/', 65, 'asdf')


function progress(percent) {
  console.log(floor(percent * 100) + " milisecs");

}

function error(err) {
  console.log(err);

}

function processSound(soundName, index) {

  const audio = loadSound(soundName, soundLoaded, error, progress);
  function soundLoaded(sound) {
    console.log(sound);
    item = new AudioObj(keys[index], sound, reverbKeys[index], soundName);
    item.play();
    soundsClass.push(item);
  }
}

function setup() {

  for (let i = 0; i < description.length; i++) {


    const item = description[i];
    const soundName = "sounds/" + item + ".wav";
    console.log(soundName);
    processSound(soundName, i);

  }

  // sounds.forEach(function (item, index) {


  // });

  //guitars
  // guitar1 = loadSound('sounds/sample_1.wav');
  // guitar2 = loadSound('sounds/sample_2.wav');
  // guitar3 = loadSound('sounds/sample_3.wav');
  // guitar4 = loadSound('sounds/sample_4.wav');

  // //nature
  // nature1 = loadSound('sounds/birds_1.wav');
  // nature2 = loadSound('sounds/thunder_1.wav');
  // nature3 = loadSound('sounds/rain_1.wav');
  // nature4 = loadSound('sounds/water_1.wav');






  // for (var i = 0; i < sounds.length; i++) {
  //   item = new AudioObj(keys[i], volumes[i], sounds[i], reverbKeys[i], description[i]);
  //   // item.button = createButton(item.description);
  //   // item.button.mousePressed() = item.play().bind(item);
  //   soundsClass.push(item);

  // }

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

  console.log('version 1.12');
  textFont("Helvetica");

  filterr = new p5.BandPass();
  fft = new p5.FFT();

  myIntroText = new introText;

}



function draw() {

  background(250);

  push();

  // blendMode(DIFFERENCE);

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

  var ellipseDist = int(map(level, 0, 0.15, 12, 18));


  for (var i = 0; i < 8; i++) {

    rotate(TWO_PI * i / 8);
    strokeWeight(0.1);
    stroke(20);
    fill(247, 245, 237, 130);

    ellipse(0, ellipseDist, 5);

  }

  pop();

  //SOUND rectangles
  push();
  blendMode(BLEND);
  translate(windowWidth / 2, windowHeight - 150);

  for (var i = 0; i < soundsClass.length; i++) {

    soundsClass[i].display(soundsClass.length, i);

  }







  for (var i = 0; i < soundsClass.length; i++) {

    soundsClass[i].rectUpdate(soundsClass.length, i);

  }
  pop();
  //firstrun

  push();
  translate(windowWidth / 2, windowHeight - 80);


  if (firstRun) {

    myIntroText.display();
  } else {
    myIntroText.display();
    myIntroText.fade();

  }
  pop();

  if (keyIsPressed === true) {
    firstRun = false;

  }

  //panning

  for (var i = 0; i < soundsClass.length; i++) {
    if (i < 4) {
      var panning = map(mouseX, 0., width, -0.9, 0.9);

      soundsClass[i].audioFile.pan(panning);
    } else {
      var panning = map(mouseX, 0., width, 0.9, -0.9);

      soundsClass[i].audioFile.pan(panning);

    }
  }


}

