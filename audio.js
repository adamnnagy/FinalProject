amplitude = new p5.Amplitude();
natureSounds = [];
guitarSounds = [];
soundVisuals = [];

function preload() {
  //guitars
  guitar1 = loadSound('sounds/sample_1.wav');
  guitar2 = loadSound('sounds/sample_2.wav');
  guitar3 = loadSound('sounds/sample_3.wav');
  guitar4 = loadSound('sounds/sample_4.wav');

  //nature
  nature1 = loadSound('sounds/birds_1.wav');
  nature2 = loadSound('sounds/thunder_1.wav');
  nature3 = loadSound('sounds/rain_1.wav');
  nature4 = loadSound('sounds/water_1.wav');

}


function setup(){

  for (var i = 0; i < soundVisuals.length; i++) {
    soundVisuals[i]
  }
  // playMode('restart');

}

function draw() {

if (guitar1.isPlaying) {
  console.log('play');
}


}

function keyPressed() {

  if (keyCode === 65) { //checking for "a"
    if (!guitar1.isPlaying()) {
    guitar1.setVolume(0.1);
    guitar1.reverseBuffer();
    guitar1.play();

  }

} else if (keyCode === 83) { //"s"
  if (!guitar1.isPlaying()) {
    guitar2.setVolume(0.1);
    guitar2.play();
  }

  } else if (keyCode === 68) { //'d'

  guitar3.setVolume(0.1);
  guitar3.play();

} else if (keyCode === 70) { //'f'

  guitar4.setVolume(0.1);
  guitar4.play();

} else if (keyCode === 74) { //'j'

  nature1.setVolume(0.1);
  nature1.play();

} else if (keyCode === 75) { //'k'

  nature2.setVolume(0.1);
  nature2.play();

} else if (keyCode === 76) { //'l'

  nature3.setVolume(0.01);
  nature3.play();

} else if (keyCode === 186) { //';'

  nature4.setVolume(0.05);
  nature4.play();

}

}
