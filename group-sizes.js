const prompt = require('prompt-sync')();

let num = Number(prompt('Class size: '));

let a = num / 3
if (num % 3 === 0){
    console.log( "You will have " + a + " groups of three.")
} else if (num % 3 === 2){
    let a = Math.floor (num / 3)
    let b = num%3 / 2
    console.log( "You will have " + a + " groups of three, and " + b + " groups of two")
} 




