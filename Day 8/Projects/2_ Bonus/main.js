// Tasks // change the background color of box1 to 'orange'

var changeCol = document.getElementById("box1");

changeCol.addEventListener("click", switchColor);

function switchColor() {

  changeCol.style.backgroundColor = "orange";

}

// set the font size in box1s to 44px

var changefont = document.getElementById("box1s");

changefont.addEventListener("click", sized);

function sized() {

  changefont.style.fontSize = "44px";
  
}

// shrink box2 by half


var shrinkBox = document.getElementById("box2");

shrinkBox.addEventListener("click", shrink);

function shrink() {

  shrinkBox.style.transform = "scale(.5)";
  
}


// double the size of box2s

var double = document.getElementById("box2s");

double.addEventListener("click", zoomed);

function zoomed() {

  double.style.transform = "scale(2)";
  
}



// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**




// **using .appendChild()**



//remove the circle from box3s
// **using .innerHTML**


// **using .removeChild()**


// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".



//write a function for #box5 that takes all the completed chores and moves them to #box5s


// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."

  //do this task using the .appendChild() or innerHTML


//reverse the text in #box6


// put <em></em> tags around the word "keep" in #box6s



