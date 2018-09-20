// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

var Person = function(name, yearOfBirth, job){

  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}


// Define a function name calculateAge which returns the age of the person

  Person.prototype.calculateAge =function(){

  var currentYear = new Date().getFullYear();

  var age = currentYear - this.yearOfBirth;

  return age;

}

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

var person1 = new Person("John",1990,"teacher");
var person2 = new Person("Jonny",1991,"caretaker");
var person3 = new Person("John Cash",1992,"preacher");

// call the calculateAge function on each object


