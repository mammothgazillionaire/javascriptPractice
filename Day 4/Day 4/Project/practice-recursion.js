// Write a JavaScript program to calculate the factorial of a number. Go to the editor

var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        product = 1;
        for(i = 1; i &lt;= n; i++) {
            product *= i;
        }
        return product;
    }
}
 
console.log(factorial(num));

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(prompt("enter a number"),prompt("enter a number")));

//Write a JavaScript program to get the integers in range (x, y)
