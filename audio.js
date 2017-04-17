amplitude = new p5.Amplitude();
natureSounds = [];
guitarSounds = [];
soundVisuals = [];
desription = [
  'guitar 1',
  'guitar 2',
  'guitar 3',
  'guitar 4',
  'birds',
  'thunder',
  'rain',
  'water'
]

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


  sounds = [
            guitar1,
            guitar2,
            guitar3,
            guitar4,

            //nature
            nature1,
            nature2,
            nature3,
            nature4,
];



}


function keyPressed() {

  if (keyCode === 65) { //checking for "a"
    if (!guitar1.isPlaying()) {

    guitar1.setVolume(0.5);
    guitar1.play();

  }

} else if (keyCode === 83) { //"s"

    if (!guitar2.isPlaying()) {
      guitar2.setVolume(0.5);
      guitar2.play();
    }

  } else if (keyCode === 68) { //'d'

      if (!guitar3.isPlaying()) {

        guitar3.setVolume(0.5);
        guitar3.play();
      }

} else if (keyCode === 70) { //'f'
    if (!guitar4.isPlaying()) {
        guitar4.setVolume(0.5);
        guitar4.reverseBuffer();
        guitar4.play();
      }

} else if (keyCode === 74) { //'j'

  nature1.setVolume(0.05);
  nature1.play();

} else if (keyCode === 75) { //'k'

  nature2.setVolume(0.05);
  nature2.play();

} else if (keyCode === 76) { //'l'

  nature3.setVolume(0.1);
  nature3.play();

} else if (keyCode === 186) { //';'

  nature4.setVolume(0.01);
  nature4.play();

}

}
