// Reference HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

// // Create elements
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');

// // Add input value
// li.textContent = input.value;

// // Add delete button symbol
// deleteButton.textContent = '❌';
// deleteButton.setAttribute('aria-label', 'Remove chapter');

// // Append elements
// li.append(deleteButton);
// list.append(li);

// //test to see if it will list
// button.addEventListener('click', function() {

//     const li = document.createElement('li');
//     const chapter = document.createElement('span');
//     const deleteButton = document.createElement('button');

//     chapter.textContent = input.value;
//     deleteButton.textContent = '❌';

//     deleteButton.setAttribute('aria-label', 'Remove chapter');

//     li.append(chapter);
//     li.append(deleteButton);

//     list.append(li);

// });

// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener("click", function () {

     if (list.children.length >= 10) {
        alert("You can only add 10 chapters!");
        return;
    }
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
});
