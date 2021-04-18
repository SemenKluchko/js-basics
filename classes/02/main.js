;

class Bookshelf  {
  constructor() {
    this.favoriteBooks = [];
  }
  
  addFavoriteBooks(bookName) {
    if(!bookName.toLowerCase().includes('great')) {
      this.favoriteBooks.push(bookName);
    }
  }
  
  printFavoriteBooks() {
    console.log(
      `Favorite books: ${String(this.favoriteBooks.length)}`
    );
    for(let book of this.favoriteBooks) {
      console.log(String(book));
    }
  }
}

let arrBooks = ['Great Year', 'You Don\'t know JavaScript' , 'World War Two', 'JS Patterns', 'Great Britain'];

function loadBooks(theBookshelf) {
  for (bookName of arrBooks) {
    theBookshelf.addFavoriteBooks(bookName);
  }
  theBookshelf.printFavoriteBooks();
}


let myBooks = new Bookshelf();
loadBooks(myBooks);
