function introText() {
  this.line1 = 'ASDF and JKL; for music';
  this.line2 = 'QWER and UIOP for effects';
  this.alpha = 255;
}

introText.prototype.display = function () {
  push();
  fill(255, this.alpha);
  noStroke();
  textAlign(CENTER);
  textSize(30);
  textFont('Courier');
  text(this.line1, 0,  -windowHeight/2);
  text(this.line2, 0, - windowHeight/2 + 200);
  pop();
};

introText.prototype.fade = function () {
  if (this.alpha > 0) {
    this.alpha -= 1.5;
  } else {
    return false;
  }
};
