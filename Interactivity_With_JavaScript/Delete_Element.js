//Select the element with the ID oaxaca and save it to a variable.
//Select its parent, assigned an ID of more-destinations.
/*Remove the element using the .removeChild() method and passing in the variable containing the oaxaca element.*/


const parent = document.querySelector("#more-destinations");

const child = document.querySelector("#oaxaca");

parent.removeChild(child);