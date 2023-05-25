let num = Math.round((Math.random() * 100)); // variable "num" that generates a random whole number between 0 to 99
let isOdd = function (num) { /* declared a function(isOdd) with the perentaces (num) */
  for(let x = 0; x < num; x*=2) { /* loop for the function */
  return num % 2 === 1; // return statment
}
}
console.log(num +" is odd: " + isOdd(num)); // prints random number and true or false, if number is odd(true) or even(false) 
console.log("3 is odd: " + isOdd(3)); // prints the statment true for odd and false for even, for manually inputed numbers
