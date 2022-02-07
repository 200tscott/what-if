const prompt = require('prompt-sync')();

let num = Number(prompt('enter your first number: '));
// else if means check first if if doesnt meet requirements of first if
if (num < 16){
    console.log('You cant drive')
}
if (num === 16) {
    console.log('You can drive but not vote ');
}
if (num === 17) {
    console.log('You can vote but not by a car ');
}
if (num === 18) {
    console.log('You can vote but not rent a car ');
}else if (num <= 24){
    console.log('You can vote but not rent a car ');
}
if (num >= 25) {
    console.log('You can do pretty much anything ');
}