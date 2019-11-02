class AudioObj {
  constructor(key, audioFile, reverbKey, description) {
    
    this.key = key; //on keyboard
    this.audioFile = audioFile; //loadSound l8r
    this.counter = 0; 
    this.reverbKey = reverbKey;
    this.description = description;
    //for UI
    this.columnWidth = 30;
    this.columnHeight = 80;
    this.gap = 70;
    this.button = createButton(this.description);

  }
  display(soundsLength, i) {
    rectMode(CORNER);
    var offset = (this.columnWidth + this.gap) * soundsLength / 2 * (-1);
    stroke(100);
    fill(240);
    rect(offset + (this.columnWidth + this.gap) * i, 0, this.columnWidth, this.columnHeight);
    textFont("Helvetica");
    textSize(20);
    textAlign(CENTER);
    text(this.description, offset + (this.columnWidth + this.gap) * i + this.columnWidth / 2, 30 + this.columnHeight);
  }
  rectUpdate(soundsLength, i) {
    if (this.audioFile.isPlaying()) {
      var offset = (this.columnWidth + this.gap) * soundsLength / 2 * (-1);
      noStroke();
      fill(50);
      var sampleTime = map(this.audioFile.currentTime(), 0, this.audioFile.duration(), 0, this.columnHeight);
      rect(offset + i * (this.columnWidth + this.gap), 0, this.columnWidth, sampleTime);
    }
  }
  play() {
    if (!this.audioFile.isPlaying()) {
      this.audioFile.loop();
    } else {
      this.audioFile.stop();
    }
  }

  touchStarted() {
    this.play();
  }

  mouseClicked() {
    this.play();
  }

  // touchStarted() {
  //   console.log(this.description);

  //   this.play();
  // }

  // ontouchstart = function() {
  //   if (!this.audioFile.isPlaying()) {
  //     this.audioFile.setVolume(this.volume);
  //     this.audioFile.loop();
  //   } else {
  //     this.audioFile.stop();
  //   }
  // }
}

function buttonPressed(button) {

}

$(document).ready(function() {
  
})













