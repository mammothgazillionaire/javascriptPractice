document.getElementById("my-text").addEventListener("click", switchColor);

var arr = ["#000","#ff0","#0ff","#f00","#00f","#f0f","#0f0"];
var color = Math.floor(Math.random()*arr.length);


function  switchColor(){
    var col = document.getElementById("background-color");
    col.style.backgroundColor = arr[color];  
};



























// var x = Math.floor(Math.random() * 256);
// var y = Math.floor(Math.random() * 256);
// var z = Math.floor(Math.random() * 256);
// var bgColor = "rgb(" + x + "," + y + "," + z + ")";
