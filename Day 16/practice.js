function Rectangle(h,w){
  this.h = h;
  this.w = w;
} 

Rectangle.prototype.area = function(){
  return this.h * this.w;
}


var rectangle = new Rectangle(10,6);

var rectangle1 = new Rectangle(20,18);


function Square(length){
  this.w = this.h = length;
}



Square.prototype = Object.create(Rectangle.prototype);

var square = new Square(43);

var square1 = new Square(46);

