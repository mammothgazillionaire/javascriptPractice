var listItems = document.querySelectorAll('.list__items');

// var list = document.querySelector('.list');

// var dragElm;
// var dropElm;

listItems.forEach(item => {
  item.addEventListener('dragstart', dragStart, false);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', dropped);
});

function dragStart(event){
  dragElm = this;
  // event.dataTransfer.setData(`${event.target}`, event.target);
  // event.dataTransfer.allowedEffect = "move";
  console.log(dragElm.innerHTML);
}

function dragOver(event){
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  // console.log(event);
}

function dropped(event){
  if(dragElm != this) {
    dropElm = this.innerHTML;
    this.innerHTML = dragElm.innerHTML;
    dragElm.innerHTML = dropElm;
  }
  event.preventDefault();
  // console.log(dropElm);
  // console.log(dragElm);
  console.log(event);
}

