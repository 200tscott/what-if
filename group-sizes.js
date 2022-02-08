const prompt = require('prompt-sync')();

let num = Number(prompt('Class size: '));


if (num % 3 === 0){
    console.log( "You will have " + a + " groups of three.")
} else if (num % 3 === 1){
    console.log( "You will have " + (num - 4)/3 + " groups of three, and 2 groups of two")
} else if (num % 3 === 2){
    console.log( "You will have " + (num - 2)/3 + " groups of three, and 2 groups of two")




