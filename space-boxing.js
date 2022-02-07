const prompt = require('prompt-sync')();
 
let num = Number(prompt('enter your weight on earth: '));
let num2 = Number(prompt('Enter the planet number: '));

if (num2 === 1) {
    let result = num * 0.78
    console.log("Weight on venus is " + result); 
}else if (num2 === 2) {
    let result = num * 0.39
    console.log("Weight on Mars is " + result); 
}else if (num2 === 3) {
    let result = num * 2.65
    console.log("Weight on Jupiter is " + result); 
}else if (num2 === 4) {
    let result = num * 1.17
    console.log("Weight on Saturn is " + result); 
}else if (num2 === 5) {
    let result = num * 1.05
    console.log("Weight on Uranus is " + result); 
}else if (num2 === 6) {
    let result = num * 1.23
    console.log("Weight on Neptune is " + result); 
}
