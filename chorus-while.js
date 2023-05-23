const chorus = "Let's dance!"; // Value that will be repeated x number of times
let repeat = 0; //Inital value of repeat

while (repeat < 10) /* Where the loop will stop at */ {
  if (repeat === 5) {
    console.log("*change key*"); //Changes key after 5 repetitions
}  
  console.log(chorus);
  repeat++; //How much "repeat" will proceed to the next step : will increas by 1
}
console.log("Until the sun comes up!"); // End of loop 
