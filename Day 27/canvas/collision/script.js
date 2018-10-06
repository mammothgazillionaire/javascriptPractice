var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
  x: 10,
  y: 10
}

var colors = [
  "#f0f",
  "#bada55",
  "#eda",
  "#bda"
];

addEventListener("mousemove",function(e){
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize",function(e){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight; 

  init();
});

function randomIntFromRange(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors){
  return colors[Math.floor(Math.random() * colors.length)];
}

function getDistance(x1,y1,x2,y2){
  let xDistance = x2 - x1 ;
  let yDistance = y2 - y1 ;

  return Math
  .sqrt(Math.pow(xDistance,2) + Math.pow(yDistance, 2));
}

function Circle(x,y,radius,color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = function (){
    
    this.draw();
  };

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2,false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };
}

let circle1;
let circle2;
function init(){
  circle1 = new Circle(300,300,100,'black');
  circle2 = new Circle(10,10,30,'red');
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, innerWidth,innerHeight);
  
  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();

  if (getDistance(circle1.x,circle1.y,circle2.x,circle2.y) < circle1.radius + circle2.radius){
    circle1.color = 'red';
  }else {
    circle1.color = 'black';
  }

  console.log(getDistance(circle1.x,circle1.y,circle2.x,circle2.y));
  // ctx.fillText("HTML CANVAS BOILERPLATE", mouse.x,mouse.y);
}

init();
animate();



