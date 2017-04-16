function draw() {

  for (var i = 0; i < sounds.length; i++) {

    if (sounds[i].isPlaying()) {
          console.log(sounds[i].duration());
    }
  }


}
