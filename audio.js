function preload() {
  guitar1 = loadSound('sounds/sample_1.wav');
  guitar2 = loadSound('sounds/sample_2.wav');
  nature1 = loadSound('sounds/Birds Songs And Calls.wav');
  nature2 = loadSound('sounds/Thunder Light Rain.wav');
}





function setup(){

  createCanvas(windowWidth,windowHeight);



textSize(50);

}

function draw() {




}

function keyPressed() {
  if (keyCode === 65) { //checking for "a"

  guitar1.setVolume(0.1);
  guitar1.play();


} else if (keyCode === 83) { //"s"

guitar2.setVolume(0.1);
guitar2.play();


  } else if (keyCode === 68) { //'d'
  nature1.setVolume(0.1);
  nature1.play();
} else if (keyCode === 70) { //'f'
  nature2.setVolume(0.1);
  nature2.play();
}
}
