console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let photo = document.querySelector('img');


const photoEvent = event => {
	event.preventDefault();

	alert("You're doing great!");
}

photo.addEventListener('mouseover', photoEvent);