
 var row =25;
 var col =25;


for(var i = 1 ; i <= row ; i++ ){
  for(var j = 1 ; j <= col ; j++ ){
      var grid = document.querySelector(".snake_game");
      var element = document.createElement('div');
      element.classList.add('grid-box');
      element.setAttribute("data-row",`${i}`);
      element.setAttribute("data-col",`${j}`);
      grid.appendChild(element);
      // console.log(grid)
  }  
}

