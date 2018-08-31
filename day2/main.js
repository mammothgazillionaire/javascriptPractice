// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

function passwordValidation(){
  var password = prompt("write your password");
  var confirmPassword = prompt("confirm your password");
if(password == password && confirmPassword == password){
    console.log("password correct");
}
}

passwordValidation();


// Find the output of the following
// Logical AND operation
// true  && true; // true
// true  && false; // false
// false && true; // false
// false && false; // false

// Logical OR operation
// true  || true; // true
// true  || false; // true
// false || true; // true
// false || false; // false

// "foo" && "bar"; // "bar"
// "foo" && "bar"; // "bar"
// "foo" && "";  // ""
// ""    && "foo"; // ""

// "foo" || "bar"; // "foo"
// "bar" || "foo"; // "bar"
// "foo" || ""; // "foo"
// ""    || "foo"; // "foo"


// alert(alert(1) || 2 || alert(2));



// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

function calculation(a,b,op){
if(op == "*"){
 console.log(a*b);
}else if (op == "+"){
  console.log(a+b);
}else if (op == "/"){
 console.log(a/b);
}else{
console.log(a-b);
}
}
calculation(2,3,"*");

// Function to display a number if user enters negative number

function numberChecker(){
  var number = prompt("enter a number");
  if(number >= 0){
    console.log("number is positive");
  }else {
  console.log("number is negative")
  }
}

numberChecker();

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function summer(){
  var sum = 0;
for(var i = 0; i < 1000 ; i++){
  if( i%3 == 0 || i%5 == 0){
   console.log(sum = sum + i);
  }
}
}
summer();


// If user enters positive number, that number won't be displayed


function numberChecker(){
  var number = prompt("enter a number");
  if(number >= 0){
    alert("");
  }else if (number <= 0){
	alert(number);	
}
}

numberChecker();

// Funnction to check whether an integer entered by the user is odd or even

function oddEven(){
var number = prompt("enter a number");
if(number%2 == 0){
 console.log("number is even");
}else {
console.log("number is odd");
}
}

oddEven();

// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12



// Funnction to Check Whether a Character is Vowel or Consonant

function letterCheck(){
var char = prompt("enter a letter");
if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
 console.log("vowel");
}else {
 console.log("consonent");
}
}

letterCheck();
// Funnction to Find the Largest Number Among Three Numbers


function largest(){
var num1 = prompt("enter a number");
var num2 = prompt("enter a number");
var num3 = prompt("enter a number");
if(num1> num2 && num1 > num3){
  console.log(num1 + " is the largest");
}else if ( num2 > num3 && num2 > num1){
  console.log(num2 + " is the largest");
}
else{
  console.log(num3 + " is the largest");
}
}
largest();

//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.



// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30




// Funnction to generate Multiplication Table of a given number (use alert for number input)


function number(a){
var no = prompt("enter a number");
for(a=1; a<=10; a++){
alert(a*no);
}
}

number(2);

// Function to calculate the Factorial of a Number

var no,fact;
fact= 1;
function factorial(){
   no = prompt("");
  for(var i = 1;i<= no;i++){
    fact = fact*i;
  }
  console.log(fact);
}
factorial();

// Output: var x = 10 + "1"; console.log(x); typeof x;

var x = 10 + "1";
console.log(typeof(x));

//  Solve: 225 % 6 = ?

var x = 255%6 ;
console.log(x); // 3