const input = document.querySelector('#fruit'); //part of base file/ is the input
const suggestions = document.querySelector('.suggestions ul'); //part of base file/ div for drop down


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu']; //part of base file is sugestions 

function search(str) {
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase())); //filter fruit based on input
};

//will handle event related to key inputs
function searchHandler() {										//part of base file
	const inputValue = input.value.trim();

	if (inputValue === '') {  									//if input is blank no suggestions should show
		suggestions.style.display = 'none';
	} else {
		const results = search(inputValue);
		showSuggestions(results, inputValue);
	}
};


//this will decide what will be showed 
function showSuggestions(results, inputVal) {                  //part of base file
	suggestions.innerHTML = '';

	const limitedResults = results.slice(0, 10);			  // limits suggestions to 10
	limitedResults.forEach(result => {
		const suggestionItem = document.createElement('li');
		suggestionItem.textContent = result;
		suggestionItem.classList.add('suggestion');
		suggestions.appendChild(suggestionItem);
	});
	suggestions.style.display = results.length > 0 ? 'block' : 'none'; //only show the dropdown if suggestions are avaliable 
};
//this handles choosing the suggestions 
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		suggestions.style.display = 'none';					//hide suggestions after using one
	}
}

function highlightSuggestion(e) {							//highlight suggestions under cursr
	if (e.target.classList.contains('suggestion')) {
		const allSuggestions = suggestions.querySelectorAll('.suggestion');
		allSuggestions.forEach(suggestion => suggestion.classList.remove('highlight'));
		e.target.classList.add('highlight');
	}
}
//event listeners for keystrokes clicks and mouseover
input.addEventListener('keyup', searchHandler); //part of base file
suggestions.addEventListener('click', useSuggestion);  // part of base file
suggestions.addEventListener('mouseover', highlightSuggestion);