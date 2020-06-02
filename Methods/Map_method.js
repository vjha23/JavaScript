/*
When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map()
*/
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage=animals.map(animal=>{
return animal[0]});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers=bigNumbers.map(n=>{
return n/100
})
console.log(smallNumbers.join(''));