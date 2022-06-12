//getting access to containers

const flashcards = document.getElementByClassName("flashcards")[0];
const createBox = document.getElementByClassName("create-box")[0];

//getting access to the text area
const question = document.getElementById("question");
const answer = document.getElementById("answer");

//array to hold data from the flashcards
let contentArray = localStorage.getItem('items') ?
	JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker); //to read flashcards on screen because they are in local storage

//funtion to display flashcard on screen
function divMaker(text)
{
	var div = document.createElement("div");
	var h2_question = document.createElement("h2")
	var h2_answer = document.createElement("h2")

	div.classNmae = 'flashcard'

	//for the actual question
	h2_question.setAttribute('style', "border-top:1px solid yellow; padding: 15px; margin-top: 30px");

	h2_question.innerHTML = text.my_question;

	//for the actual answer
	h2_answer.setAttribute("style", "text-align:center; display:none; color:red");

	h2_answer.innerHTML = text.my_answer;

	div.appendChild(h2_question);
	div.appendChild(h2_answer);

	//clicking shows answer
	div.addEventListener("click", function () {
		if (h2_answer.style.display == "none")

			h2_answer.style.display = "block"
		else
			h2_answer.style.display = "none"

	});

	flashcards.appendChild(div);

}

//function for save button
function addFlashcard()
{
	var flashcard_info =
	{
		'my_question': question.value,
		'my_answer': answer.value,
	}

	//funtion to store info on saved card
	contentArray.push(flashcard_info);

	//to add flashcard to local storage
	localStorage.setItem('items', JSON.stringify(contentArray));

	//to display flashcard on the screen
	divMaker(contentArray[contentArray.length - 1]);
	question.value = '';
	answer.value = '';

}
//function for delete card button
function delFlashcards() {
	localStorage.clear();
	flashcards.innerHTML = '';
	contentArray = [];
}



//function for new card button
function showCreateCardBox() {
	createBox.style.display = "block";
}

//function for close button to make the card disappear
function hideCreateBox() {
	createBox.style.display = "none";
}
