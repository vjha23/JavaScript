/*
Modify the body of the turnButtonRed() function so that it modifies the button as follows:

Assigns the .style.backgroundColor to 'red'
Assigns the style.color to 'white'
Modifies the .innerHTML to 'Red Button'
2.
Add interactivity to the button element by adding a function that turns its .backgroundColor to 'red' and its font color to 'white' when the button is clicked.
*/

let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}

element.onclick = turnButtonRed;