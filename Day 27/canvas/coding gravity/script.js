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

var gravity = 1;
var friction = 0.69;

addEventListener("mousemove",function(e){
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize",function(e){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight; 

  init();
});

addEventListener('click', function(){
  init();
});

function randomIntFromRange(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors){
  return colors[Math.floor(Math.random() * colors.length)];
}

function Ball(x,y,dx,dy,radius,color){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.update = function (){
    if(this.y + this.radius + this.dy > canvas.height){
      this.dy = -this.dy * friction;
    }else{
      this.dy += gravity;
    }
    if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0){
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
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

var ball;
var ballArray = [];
function init(){
  ballArray = [];
  for(var i = 0 ; i < 100; i++){
    var radius = randomIntFromRange(20,30);
    var x = randomIntFromRange(radius, canvas.width - radius);
    var y = randomIntFromRange(0,canvas.height - radius);
    var dx = randomIntFromRange(-2 ,2);
    var dy = randomIntFromRange(-2 ,2);
    var color = randomColor(colors);
    ballArray.push(new Ball(x,y,dx,dy,radius,color));
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, innerWidth,innerHeight);
  for(var i = 0; i < ballArray.length; i++){
    ballArray[i].update();
  }
  
  // ctx.fillText("HTML CANVAS BOILERPLATE", mouse.x,mouse.y);
}

init();
animate();



