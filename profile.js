function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted!");
}


let form = document.querySelector('form#contact-me');

form.addEventListener('submit', handleSubmit);

const favColorBtn = document.getElementById('color');

const displayFavColor = event => {
    event.preventDefault();

    alert('My favorite color is Forest Green!');
}

favColorBtn.addEventListener('click', displayFavColor);

const favPlaceBtn = document.getElementById('place');

const displayFavPlace = event => {
    event.preventDefault();

    alert('My favorite place is Hawaii!');
}

favPlaceBtn.addEventListener('click', displayFavPlace);

const favRitualBtn = document.getElementById('ritual');

const displayFavRitual = event => {
    event.preventDefault();

    alert('My favorite ritual is doing the rain dance');
}

favRitualBtn.addEventListener('click', displayFavRitual);