function Rectangle(a) {
  this.side = a;
  // this.defaultHeight = 20;
}

Rectangle.prototype.display = function () {
  rectMode(CENTER);
  rect(0, 0, this.side, this.side);

};

Rectangle.prototype.update = function () {
  rotate(radians(2*frameCount/mouseX));
  // if (this.side < windowWidth) {
  //   this.side++;
  // } else {
  //   this.side = 20;
  // }
};
