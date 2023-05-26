const num = Math.round((Math.random() * 100)); // variable "num" that generates a random whole number between 0 to 99
const isOdd = function (num) { /* declared a function(isOdd) with the parameters (num) */
  for(let x = 0; x < num; x*=2) { /* loop for the function */
  return num % 2 === 1; // return statment
}
}
console.log(num+" is odd: " + isOdd(num)); // prints random number and true or false, if number is odd(true) or even(false) 
console.log("3 is odd: " + isOdd(3));  // prints the statment true for odd and false for even, for manually inputed numbers

// console.log(`${num}, ${num}, is odd ` + isOdd(num)); // Test for num (is it displaying the same or different num value)



// diffenent methods to exacute the same code

/*

function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else is {
    return true;
  }
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log(isOdd(10)); 

*/



/*

const isOdd = (num) => {
  return num % 2 !== 0 ? true : false;
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log(isOdd(10)); 

*/
