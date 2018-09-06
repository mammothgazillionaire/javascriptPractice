1.

Using math object write a JavaScript function to generate a random integer between min and max.
Hint: Use Math.random() & Math.floor()
Example:
rand(max,min)
console.log(rand(20,1)); //15
console.log(rand(1,10)); //8

function rand(min,max){
	return Math.floor(Math.random() * (min * max));
}
rand(prompt(""),prompt(""));
2.
Write a JavaScript function to format a number up to specified decimal places.
Example:
console.log(decimals(2.100212, 2)); //2.10
console.log(decimals(2.100212, 3)); //2.100
console.log(decimals(2100, 2)); //2100.00



function roundNum(a) {
	var b = parseFloat(a).toFixed(2);

	return b;
}
roundNum(prompt("enter a decimal number"));

3. Write a JavaScript function to find the highest value in an array.

Example:
console.log(maxNumber([12,34,56,1])); //56
console.log(maxNumber([-12,-34,0,-56,-1])); //0


function maxNumber(arr) {
	var highest = arr[0];
	for(var i = 0 ; i < arr.length ; i++){
	if (arr[i] > max ){
			highest = arr[i];
			}
		}
		return max;
	};

	maxNumber([2,51,24,-56,12]);




