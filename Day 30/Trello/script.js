const BOARDS = [];

var createButton = document.querySelector("Button");
var boards = document.querySelector(".boards");

boards.style.display = "none";

function createBoard(event) {
  
  boards.style.display = "block";
 
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

    var addListItems = document.querySelector(".btn-list");


    function addItems(event){
      console.log(event);
    }


    addListItems.addEventListener('click', addItems);

  }



  addList.addEventListener('click', addListItems);


}

createButton.addEventListener('click', createBoard);




// const BOARDS = [];

// class boards{

//   constructor(title){
       
  // var nextId = 0

  // this.title = title;
  // this.lists = [];
  // this.cards = {};

  // this.node = document.createElement('div');
  // this.titleNode = document.createElement('div');
  // this.listsNode = document.createElement('div');

  // this.node.id = 'board';
  // this.titleNode.id = 'trello-title-board';
  // this.listsNode.id = 'trello-canvas-board';

  // // new list title form
  // this.titleFormNode = buildListTitleForm();
  // this.titleNode.appendChild(document.createTextNode(this.title));

//   }

//   createList(){

//   }

// }


