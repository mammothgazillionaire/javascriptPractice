var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 50;
// var minRadius = 7;

var colorArray = [
    "#bada55",
    "#f0f",
    "#0ff",
    "#ff0",
    "#b55"
]

function animate(e){
  mouse.x = event.x;
  mouse.y = event.y;

}

function reCanvas(e){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
}


window.addEventListener('mousemove', animate);
window.addEventListener('resize', reCanvas);

function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2,false);
    ctx.fillStyle = this.color;
    ctx.fill();
    
  }

  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    };

    if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
       this.dy = -this.dy; 
      };
   
    this.x += this.dx;
    this.y += this.dy;

    // interactivity 

    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 
       && mouse.y - this.y < 50 && mouse.y - this.y > -50){
         if(this.radius < maxRadius){
          this.radius += 1;
         }
    }else if (this.radius > this.minRadius){
      this.radius -=1;
    }

    this.draw();
  }

}

var circleArray = [];

function init(){
  circleArray = [];
  for(var i = 0 ; i < 800 ; i++){
    var radius = Math.random() * 5 + 2; 
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;   
    circleArray.push(new Circle(x,y,dx,dy,radius));
  }
}
init();

function animateCircle(){
    requestAnimationFrame(animateCircle);

    ctx.clearRect(0,0, innerWidth,innerHeight);
    
    for(var i = 0 ; i < circleArray.length ; i++){
      circleArray[i].update();
    }
  }

  animateCircle();




  // var z = 1000;
  // function animateRect(){
  //   requestAnimationFrame(animateRect);
    
  //   ctx.clearRect(0,0,innerWidth,innerHeight);
  
  //   ctx.beginPath();
  //   ctx.fillRect(z,500,200,50);
    
  //   if( z > innerWidth || z < 0) dz = -dz;
  
  //   z += dz;
  
  //   }
  //   // animateRect();
  
