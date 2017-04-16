function Rectangle(a) {
  this.width = a;
  this.height = a;
}

Rectangle.prototype.display = function () {

  rect(0, 0, this.width, this.height);

};

Rectangle.prototype.update = function () {
  rotate(radians(2*frameCount/mouseX));
};
