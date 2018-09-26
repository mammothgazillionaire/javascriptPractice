// What's the error in the commented code below and what will be the error message

for(var i = 0; i<20; i++ {
  console.log(i);
}

// syntaxError: unexpected token 

// What's the error in the code below and what will be the error message

var name = 'cat';
console.log(surName);

// refrenceError: surName is not defined

// What's the error in the code below and what will be the error message

var schoolName = "RSVP";
schoolName();

// typeError: schoolName is not a function

// What's the error in the code below and what will be the error message
function range(num){
  console.log(num);
  range(num);
}
range();

//  rangeError: no condition defined infinite loop will call itself

// What will be the output or if error what error will you get

function sayHello() {
  "use strict"
  for(i = 0; i< 3; i++){
    console.log('Hello')
  }
}

sayHello()

// refrenceError:  i is not defined

// What will be the output or if error what error will you get

function Animal(name, doesEat, doesSleep) { 
  this.name = name;
  this.eats = doesEat;
  this.sleeps = doesSleep;
}
var rabbit = Animal('Rabbit', true, true);
console.log(name)


// Rabbit

// What will be the output or if error what error will you get

"use strict"
function Animal(name, doesEat, doesSleep) { 
  this.name = name;
  this.eats = doesEat;
  this.sleeps = doesSleep;
}
var rabbit = Animal('Rabbit', true, true);
console.log(name)

// typeError: Cannot set property 'name' of undefined
 
// Solve This http://javascript.info/task/finally-or-code-after