const BOARDS = [];

var createButton = document.querySelector("Button");
var boards = document.querySelector(".boards");

boards.style.display = "none";

function createBoard(event) {
  
  boards.style.display = "block";
  // boards.innerHTML = `<input type="text" class="Create" placeholder="HEADING" name="card">`;

  // let card1 = document.querySelector(".create");

  // card1.innerHTML = `<label for="card">${card1.value}</label>`;

  boards.innerHTML = `<label for="card" class="heading_card">Card</label>
                      <div for="list" class="add_list">
                      <label>Add list</label>
                      </div>
                      <button class="btn-list">add list</button>`;

  let card = document.querySelector(".heading_card").contentEditable = true;

  let addList = document.querySelector(".add_list");


  function addListItems(event){
    
    addList.style.background = "transparent";

    var editList = addList.contentEditable = true;

  }


  addList.addEventListener('click', addListItems);



  // let list = {};

  // BOARDS.push(card);
  // console.log(BOARDS);
}



createButton.addEventListener('click', createBoard);
