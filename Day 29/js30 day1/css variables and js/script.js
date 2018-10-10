var inputs = document.querySelectorAll("input");

function updateValues(){
  var changePxValue = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value + changePxValue);
}

inputs.forEach(elem => elem.addEventListener('change',updateValues));
inputs.forEach(elem => elem.addEventListener('mousemove',updateValues));