var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
// triangle using line

ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(300,100);
ctx.moveTo(300,300);
ctx.lineTo(300,100);
ctx.moveTo(50,300);
ctx.lineTo(300,300);
ctx.stroke();


// arcs and circle 
function createCircle(){
  for(var i = 0 ; i < 5 ; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x,y,100,0, Math.PI * 2,false);
  ctx.stroke();
  }
}
// setInterval(createCircle,1000);
createCircle();

// rectangle

ctx.beginPath();
ctx.strokeRect(700,100,350,200);

// line 

ctx.beginPath();
ctx.moveTo(1500,200);
ctx.lineTo(1200,200);
ctx.stroke();