function Rectangle(a) {
  this.side = a;
  // this.defaultHeight = 20;
}

Rectangle.prototype.display = function () {
  rectMode(CENTER);
  rect(0, 0, this.side, this.side);

};

Rectangle.prototype.update = function () {
  rotate(radians(frameCount/sqrt(mouseY))/2);
};
