const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


//Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal
const foundAnimal=animals.findIndex(find=>{
  return find==='elephant';
})
console.log(foundAnimal);

//Let’s see if we can find the index of the first animal that starts with the letter 's'
const startsWithS=animals.findIndex(find=>{
  return find[0]==='s';
})
console.log(startsWithS);