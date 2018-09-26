// Output in the right sequence

try {
  console.log('First');

  console.log('Second'); 

  helloFirst;

} catch(err) {

  console.log('Third' + err); 

} finally {
  console.log('Fourth'); 
}

console.log('Fifth');



// Output in the right sequence


// try {
//   {
//   console.log('First');
  
//   helloFirst;

//   console.log('Second'); 

// } catch(err) {

//   console.log('Third' + err); 

// } finally {
//   console.log('Fourth'); 
// }

// console.log('Fifth');



//Use the following Data and do the following

var json = {name:"Steve Jobs",job:"Founder"};

try {  
  console.log(json.name);
  }catch(error) {
    console.log(error.name);
    console.log(error.message);
  }


// Write a program using try catch

// check if the json object doesn't have a age property throw an arror saying "Incomplete Data"



// If you have age you can console.log age

// in catch statement console.log error message and name

var json = {name:"Steve Jobs",job:"Founder", age: 42};

// Execute your program using this data
try {  
  if(!json.age){
    throw new SyntaxError("Incomplete data");
  }
  console.log(json.age);
  }catch(error) {
    console.log(error.name);
    console.log(error.message);
  }