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

//test to see if it will list
button.addEventListener('click', function() {

    const li = document.createElement('li');
    const chapter = document.createElement('span');
    const deleteButton = document.createElement('button');

    chapter.textContent = input.value;
    deleteButton.textContent = '❌';

    deleteButton.setAttribute('aria-label', 'Remove chapter');

    li.append(chapter);
    li.append(deleteButton);

    list.append(li);

});