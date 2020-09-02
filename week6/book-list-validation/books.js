// array which contains the initial books
var books = [{
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }, {
        title: 'Moara cu noroc',
        author: 'Ioan Slavici',
        alreadyRead: true
    }
];

var myBooks = document.getElementById('myBooks');
var bookList = document.createElement('ul');
myBooks.appendChild(bookList);

// get the elements for errors, this element will contain the erros
var titleError = document.getElementById('titleError');
var authorError = document.getElementById('authorError');
var duplicateError = document.getElementById('duplicateError');

// get the elements with the name 'title' and select the first one from the array => [0]
var bookTitle = document.getElementsByName('title')[0];
// get the elements with the name 'author' and select the first one from the array => [0]
var bookAuthor = document.getElementsByName('author')[0];


for (var i = 0; i < books.length; i++) {
    displayBook(books[i]);
}

document.getElementById('addNewBook').addEventListener('click', function () {
    // check if the form is invalid or if the book already exists
    if (isFormInvalid(bookTitle, bookAuthor) || isDuplicate(bookTitle.value, bookAuthor.value)) {
        // if the form is invalid display errors
        dispalyErrors();
    } else {
        // else add the new book to the list and display it
        var newBook = {
            title: bookTitle.value,
            author: bookAuthor.value,
            alreadyRead: false
        }

        // the push method adds a new element in the book array
        // for more details -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        books.push(newBook);

        displayBook(newBook);
        // reset the form after the new book was added
        document.getElementsByTagName("form")[0].reset();
    }


});

/* add event listeners to keypress event
in order to clear the error when the user enter something in the inputs */
bookTitle.addEventListener('keypress', removeErrors);
bookAuthor.addEventListener('keypress', removeErrors);


function displayBook(currentBook) {
    // create a list item element
    var listItem = document.createElement('li');

    // create an input
    var checkbox = document.createElement('input');
    // set the input type attribute to checkbox
    checkbox.setAttribute('type', 'checkbox');
    // set the checked attribute based on the books alreadyRead property
    checkbox.checked = currentBook.alreadyRead;
    // append the checkbos to the list item
    listItem.appendChild(checkbox);

    // get the book details from the title and author properites concatenated with the 'by' string
    var bookDetails = currentBook.title + ' by ' + currentBook.author;
    // create a text node which contains the bookDetails string
    var bookDetailsTextNode = document.createTextNode(bookDetails);
    // append the bookDetailsTextNode to the list item
    listItem.appendChild(bookDetailsTextNode);

    // append the list item to the bookList (global variable)
    bookList.appendChild(listItem);
}

function isFormInvalid(title, author) {
    var invalid = false;

    // if the title or the the author doesn't have value set the invalid variable to true
    if (!title.value || !author.value) {
        invalid = true;
    }

    // this function will return true or false based on the forms validity
    return invalid;

}

function dispalyErrors() {
    // remove errors
    removeErrors();

    var errorMessage;

    // id the title doesn't have value add a title error meSsage
    if (!bookTitle.value) {
        errorMessage = document.createTextNode("Title is required!");
        titleError.appendChild(errorMessage);
    }

    // if the author doesn't have value add an author error message
    if (!bookAuthor.value) {
        errorMessage = document.createTextNode("Author is required!");
        authorError.appendChild(errorMessage);
    }
    if(isDuplicate(bookTitle.value, bookAuthor.value)) {
        errorMessage = document.createTextNode("This book is already in the list!");
        duplicateError.appendChild(errorMessage);
    }
}

function removeErrors() {
   var errors = document.getElementsByClassName("error");
    for(var i=0; i<errors.length; i++) {
        errors[i].innerHTML = '';
    }
}

// cheks if the new book is a duplicate and returns the result of this verification
function isDuplicate(newTitle, newAuthor) {
    // we assume that the new book is not a duplicate
    var duplicate = false;

    // iterate over the books array
    // and compare each books title and author with the new books title and author
    for(var i=0; i < books.length; i++) {
        if(books[i].title === newTitle && books[i].author === newAuthor) {
            duplicate = true;
        }
    }
    return duplicate;
}