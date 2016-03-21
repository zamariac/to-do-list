var myButton = document.querySelector("button");
var listInput = document.querySelector("input");
var listForm = document.querySelector(".to-do");


var todoList = []
myButton.addEventListener('click', onButtonClick);


function onButtonClick(e){
	 listForm.innerHTML = listForm.innerHTML + "<li>" + listInput.value + "</li>";
	 listInput.value = "";
	 
}

console.log(listInput.value);