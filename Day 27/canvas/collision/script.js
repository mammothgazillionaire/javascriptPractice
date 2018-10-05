var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
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

function Object(x,y,radius,color){
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

function init(){
  
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, innerWidth,innerHeight);
  
  
  ctx.fillText("HTML CANVAS BOILERPLATE", mouse.x,mouse.y);
}

init();
animate();



