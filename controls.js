function mouseClicked() {
  for (var i = 0; i < sounds.length; i++) {
    sounds[i].stop();
  }
}

function keyPressed() {

  //playback
  // NOTE: playback

  for (var i = 0; i < soundsClass.length; i++) {
    if(keyCode === soundsClass[i].key) {
      if (!soundsClass[i].audioFile.isPlaying()) {
        soundsClass[i].audioFile.setVolume(soundsClass[i].volume);
        soundsClass[i].audioFile.loop();
      } else {

        soundsClass[i].audioFile.stop();
      }
    }
  }

  for (var i = 0; i < soundsClass.length; i++) {
    if(keyCode === soundsClass[i].reverbKey) {
      if (soundsClass[i].counter%2 == 0) {
        var reverb = new p5.Reverb();
        soundsClass[i].audioFile.disconnect();
        reverb.process(soundsClass[i].audioFile, 3, 2);

        soundsClass[i].counter++;
      } else if (soundsClass[i].counter%2 == 1) {
        soundsClass[i].audioFile.connect();
        soundsClass[i].counter++;
      }
    }
  }


}
