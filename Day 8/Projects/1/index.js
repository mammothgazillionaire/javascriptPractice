//Select the section with an id of container without using querySelector.
// var elm = document.getElementById('container');
// console.log(elm);

//Select the section with an id of container using querySelector.
// var elm = document.querySelector('#container');

// console.log(elm);

// var elm1 = $("#container");

// console.log(elm1);

//Select all of the list items with a class of "second".

// var liSecond = document.querySelectorAll(".second");

// console.log(liSecond);

// //Select a list item with a class of third, but only the list item inside of the ol tag.


// var olThird = document.querySelector("ol").querySelector(".third");

// console.log(olThird);


// //Give the section with an id of container the text "Hello!".

// var addText = document.getElementById("container").innerText = "Hello!";

// console.log(addText);

// //Add the class main to the div with a class of footer.

// var footElement = document.querySelector(".footer");

// footElement.classList.add("main");

// console.log(footElement);

// //Remove the class main on the div with a class of footer.


// var footElement = document.querySelector(".footer");

// footElement.classList.remove("main");

// console.log(footElement);


// //Create a new li element.


// var newElement = document.createElement("li");

// console.log(newElement);

// //Give the li the text "four".

// var fourthElement = newElement.classList.add("four");

// console.log(fourthElement);

// //Append the li to the ul element.

// var appended = document.querySelector("ul");

// appende.appendChild(fourthElement);  

// console.log(appended);

// //Loop over all of the list inside the ol tag and give them a background color of "green".


// var listItems = document.querySelector("ol").querySelector("li");

// for(var i = 0; i < listItems.length; i++){

// listItems.style.backgroundColor = "green";

// }



// //Remove the div with a class of footer.

// var removed = document.querySelector(".footer");

// removed.body.removeChild(removed);

// console.log(removed);
