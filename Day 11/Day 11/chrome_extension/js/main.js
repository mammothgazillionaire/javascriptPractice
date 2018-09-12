var list = document.querySelector(".list");

var toDoValue = document.querySelector(".value");

var listItem = document.querySelector(".list-item");

var addBtn = document.querySelector(".addBtn");

var checkListItems = document.querySelector(".check");

var closeBtn = document.querySelector(".close");


var arrayOfListItems = JSON.parse(localStorage.getItem('todos')) || [];

function displayToDo(arrayOfItems = [],list){

  list.innerHTML = arrayOfListItems.map((val,i) => {
  return (`<li class="list-item">
          <input class="check" type="checkbox" data-id=${i}>
          <label for="check" data-id=${i}>${val.name}</label>
          <span class="close" data-id=${i}>&#215;</span>
          </li>`
              );
})

toDoValue.value = "";

}


function addToDo(){

let toDoVal = toDoValue.value;

var obj = {name: toDoVal, check: false};

arrayOfListItems.push(obj);

displayToDo(arrayOfListItems,list);

}

function deleteToDo(e) {

  if(e.target.className !== 'close') return;
  let id = e.target.dataset.id;
  arrayOfListItems.splice(id, 1);
  displayToDo(arrayOfListItems,list);

}

function setTruth(e){
  if(e.target.className !== 'check') return;
  checkListItems = true;
  console.log(setTruth(e));
}


checkListItems.addEventListener('click', setTruth);
list.addEventListener('click', deleteToDo);
addBtn.addEventListener('click', addToDo);





/*---------------------------------------------------------------------------------*/



// Create clock 

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
  
  setInterval(getCurrentTime,500);

  