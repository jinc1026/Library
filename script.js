// Contain all list of books
let myLibrary = [];

let bookshelf = document.querySelector("#bookshelf");

// Construct book object
function book(titleInfo, authorInfo, pageInfo, langInfo, readInfo){
	this.title = titleInfo;
	this.author = authorInfo;
	this.pages = pageInfo;
	this.lang = langInfo;
	this.read = readInfo;
}

// Sample Books
let book1 = new book("The Lord of the Rings", "J. R. R. Tolkien", 625 , "English", "Yes")
let book2 = new book("Harry Potter", "J. K. Rowling", 625 , "English", "Yes")
myLibrary.push(book1);
myLibrary.push(book2);

// Add book object into myLibrary array
function addBookToLibrary(book){
	myLibrary.push(book);
	displayBooks();
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addBook");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the cancel button that closes the modal
var cancel = document.querySelector("#cancel");

// Get the add button that add a book to the array
var add = document.querySelector("#add");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

cancel.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  
	if (event.target == modal) {
    modal.style.display = "none";
	
  }
}

// When the user clicks add button, create book object and add to the library
add.addEventListener("click", function(){
	event.preventDefault();
	// Get the info from the form
	let title = document.querySelector("#title");
	let author = document.querySelector("#author");
	let pages = document.querySelector("#pages");
	let lang = document.querySelector("#lang");
	let read = document.querySelector("#read");
	
	let newBook = new book(title.value, author.value, pages.value, 
								  lang.value, 	read.value);
	title.value = "";
	author.value = "";
	pages.value = "";
	lang.value = "";
	read.value = "";
	
	addBookToLibrary(newBook);
	
	modal.style.display = "none";	
})

// Display each book info
function displayBooks(){
	//Clear the existing bookcards before populating new list
	bookshelf.innerHTML="";

	myLibrary.forEach((book, index)=>{
	book.index = index;
	let bookCard = document.createElement("div");
	bookCard.classList.add("bookCard");
		
	// create erase button and add a function to delete a element from 
	//	'myLibrary' array upon click	
	let deleteButton = document.createElement("span");
	deleteButton.innerHTML = "&times;";
	deleteButton.classList.add("close");
	deleteButton.classList.add("delete");
	deleteButton.addEventListener("click", function(){
		myLibrary.splice(book.index, 1);
		displayBooks();
	});	
		
	let bookTitle = document.createElement("div");
	bookTitle.classList.add("bookTitle");
	let bookAuthor = document.createElement("div");
	let bookPages = document.createElement("div");
	let bookLang = document.createElement("div");
	bookTitle.innerHTML = book.title;
	bookAuthor.innerHTML = "Author: " + book.author;
	bookPages.innerHTML = "Number of Pages: " + book.pages;
	bookLang.innerHTML = "Language: " + book.lang;
	
	let bookReadInfo = document.createElement("div");
	bookReadInfo.innerHTML = "Mark as Read: ";
	let bookRead = document.createElement("input");
	bookRead.setAttribute("type", "checkbox");
	bookRead.addEventListener("click", function(){
		if(bookRead.checked){
			bookCard.classList.add("read");
		} else {
			bookCard.classList.remove("read");
		}
		
	})
	
		
	bookReadInfo.appendChild(bookRead);
		
	bookCard.appendChild(deleteButton);
	bookCard.appendChild(bookTitle);
	bookCard.appendChild(bookAuthor);
	bookCard.appendChild(bookPages);
	bookCard.appendChild(bookLang);
	bookCard.appendChild(bookReadInfo);

	bookshelf.appendChild(bookCard);
	})
	
}

displayBooks();













