import quotes from './quotes.js'

var arrayOfListItems = JSON.parse(localStorage.getItem('todos')) || [];
var list = document.querySelector(".list");
var toDoValue = document.querySelector(".value");
var listItem = document.querySelector(".list-item");
var addBtn = document.querySelector(".addBtn");
var checkListItems = document.querySelector(".check");
var closeBtn = document.querySelector(".close");
var greeting = document.querySelector(".greeting");
var forQuotes = document.querySelector('.for__quotes');

// create and display items of TODO

function addToDo() {
  let toDoVal = toDoValue.value;
  var obj = {
    name: toDoVal,
    check: false
  };

  arrayOfListItems.push(obj);
  displayToDo(arrayOfListItems,list);

  localStorage.setItem('todos',JSON.stringify(arrayOfListItems));
}

function displayToDo(){

  list.innerHTML = arrayOfListItems.map((val,i) => {
  return (`<li class="list-item">
          <input class="check" type="checkbox" data-id=${i} ${val.check ? 'checked': ''}>
          <label class="label" for="check" data-id=${i}>${val.name}</label>
          <span class="close" data-id=${i}>&#215;</span>
          <span class="close edit" data-id=${i}>&#x270E;</span>
          </li>`
              );
})
  toDoValue.value = "";

}

// delete TODO


function deleteToDo(e) {
  if(e.target.className !== 'close') return;
  let id = e.target.dataset.id;
  arrayOfListItems.splice(id, 1);
  displayToDo(arrayOfListItems,list);
  localStorage.setItem('todos',JSON.stringify(arrayOfListItems));

}


function setTruth(e){
  if(e.target.className !== 'check') return;
  
  let id = e.target.dataset.id;

  arrayOfListItems[id].check = !arrayOfListItems[id].check;
  localStorage.setItem('todos', JSON.stringify(arrayOfListItems));
  displayToDo(arrayOfListItems, list);
}


list.addEventListener('click', setTruth);
list.addEventListener('click', deleteToDo);
addBtn.addEventListener('click', addToDo);


/*---------------------------------------------------------------------------------*/


// Create clock and message 

function getCurrentTime(){

  var exactTime = new Date();
  
  var hour = exactTime.getHours();
  var min = exactTime.getMinutes();
  var sec = exactTime.getSeconds();
  
  var getHr = document.querySelector(".hour");
  var getMin = document.querySelector(".minute");
  var getSec = document.querySelector(".sec");
  
  getHr.innerHTML = `${hour}:`;
  getMin.innerHTML = `${min}:`;
  getSec.innerHTML = `${sec}`;
}
  
setInterval(getCurrentTime, 500);

//    Greeting
  
function greetings(){
  var exactTime = new Date();
  var hour = exactTime.getHours();
  var greetMsg = document.querySelector(".greeting");
  
  greeting.innerHTML = `<h1 class="greeting-message">${greetMsg},</h1>`;

   if(hour >= 0 && hour < 12){
     greetMsg.innerHTML = "Good Morning ";
   }
  else if(hour >= 12 && hour < 17){
    greetMsg.innerHTML = "Good Afternoon";
  }
  else if(hour >= 17 && hour < 23){
    greetMsg.innerHTML = "Good Evening";
  }
  else {
    greetMsg.innerHTML = "Go To Bed";
  }
  
}
  greetings();


// Ask username 


// QUOTES

function randomQuotes(){

var randomValue = Math.floor(Math.random() * quotes.length);
var randomQuote = quotes[randomValue];

forQuotes.innerHTML = `<p class="quote">${randomQuote.quote}</p><p class="author">${randomQuote.author}</p>`;
}

randomQuotes();

setInterval(randomQuotes, 20000);

displayToDo(arrayOfListItems,list);




// function editToDo(e) {

//   if(e.target.className !== 'edit') return;
//   let id = e.target.dataset.id;
//   var editBtn = document.querySelector(".edit");
//   var label = document.querySelector(".label");

//   label.innerText=editInput.value;
//   displayToDo(arrayOfListItems,list);
//   localStorage.setItem('todos',JSON.stringify(arrayOfListItems));

// }

// var editTask=function(){
//   console.log("Edit Task...");
//   console.log("Change 'edit' to 'save'");
  
  
//   var listItem=this.parentNode;
  
  // var editInput=listItem.querySelector('input[type=text]');
  // var label=listItem.querySelector("label");
  // var containsClass=listItem.classList.contains("editMode");
  //     //If class of the parent is .editmode
  //     if(containsClass){
  
  //     //switch to .editmode
  //     //label becomes the inputs value.
  //       label.innerText=editInput.value;
  //     }else{
  //       editInput.value=label.innerText;
  //     }
  
  //     //toggle .editmode on the parent.
  //     listItem.classList.toggle("editMode");
  // }
  
// list.addEventListener('click', editToDo);