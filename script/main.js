let bookdata = [];

class BooksObject {
  constructor(object = []) {
    this.booklist = object;
  }

  loadbooks(bookdatas = []) {
    for (let i = 0; i < bookdatas.booklist.length; i += 1) {
      const bookobject1 = new Books();
      bookobject1.title = bookdatas.booklist[i].title;
      bookobject1.author = bookdatas.booklist[i].author;
      this.booklist.push(bookobject1);
    }
  }

  addBook(title, author) {
    const bookobject1 = new Books();
    bookobject1.author = author;
    bookobject1.title = title;
    this.booklist.push(bookobject1);
    this.displaynewbook();
    document.getElementById('titlename').value = '';
    document.getElementById('authorname').value = '';
  }

  removeBook(index) {    
    const removebooksection = document.getElementById('removebookstable');
    this.booklist.splice(index, 1);
    removebooksection.innerHTML = '';
    this.displayallbooks();
  }

  displaynewbook() {
    console.log('here');
    console.log(this.booklist.length);
    let bookhtml;
    const removebooksection = document.getElementById('removebookstable');
    if (booklist.booklist.length % 2 === 0) {
      bookhtml = `<tr class="greyrow"><th><p>"${this.booklist[(this.booklist.length) - 1].title}" by "${this.booklist[(this.booklist.length) - 1].author}</p></th><th><form id="removebook${(this.booklist.length) - 1}"><button class="removebutton" id="removebookbutton${(this.booklist.length) - 1}" type="button">remove</button></form></th></tr>`;
    } else {
      bookhtml = `<tr><th><p>"${this.booklist[(this.booklist.length) - 1].title}" by "${this.booklist[(this.booklist.length) - 1].author}</p></th><th><form id="removebook${(this.booklist.length) - 1}"><button class="removebutton" id="removebookbutton${(this.booklist.length) - 1}" type="button">remove</button></form></th></tr>`;
    }
    removebooksection.innerHTML += bookhtml;
    const removebutton = `#removebookbutton${(this.booklist.booklist.length) - 1}`;
    document.querySelector(removebutton).addEventListener('click', () => {
      const prefix = removebutton[17];
      this.booklist.removeBook(prefix);
    });
  }

  displayallbooks() {  
    const removebooksection = document.getElementById('removebookstable');
    for (let i = 0; i < this.booklist.length; i += 1) {
      let bookhtml;
      if (i % 2 === 1) {
        bookhtml = `<tr class="greyrow"><th><p>"${this.booklist[i].title}" by "${this.booklist[i].author}</p></th><th><form id="removebook${i}"><button class="removebutton" id="removebookbutton${i}" type="button">remove</button></form></th></tr>`;
      } else {
        bookhtml = `<tr><th><p>"${this.booklist[i].title}" by "${this.booklist[i].author}</p></th><th><form id="removebook${i}"><button class="removebutton" id="removebookbutton${i}" type="button">remove</button></form></th></tr>`;
      }
      removebooksection.innerHTML += bookhtml;
    }
    for (let j = 0; j < this.booklist.length; j += 1) {
      const removebutton = `#removebookbutton${j}`;
      document.querySelector(removebutton).addEventListener('click', () => {
        const prefix = removebutton[17];
        this.removeBook(prefix);
      });
    }
  }
}

let booklist = new BooksObject();

document.addEventListener('DOMContentLoaded', () => {
  window.onload = () => {
    if (localStorage) {
      const localStorageItem = localStorage.getItem('booklist');
      bookdata = JSON.parse(localStorageItem);
      if (bookdata == null) {
        bookdata = [];
      }
      booklist.loadbooks(bookdata);
    }
    const removebooksection = document.getElementById('removebookstable');
    for (let i = 0; i < booklist.booklist.length; i += 1) {
      let bookhtml;
      if (i % 2 === 1) {
        bookhtml = `<tr class="greyrow"><th><p>"${booklist.booklist[i].title}" by "${booklist.booklist[i].author}</p></th><th><form id="removebook${i}"><button class="removebutton" id="removebookbutton${i}" type="button">remove</button></form></th></tr>`;
      } else {
        bookhtml = `<tr><th><p>"${booklist.booklist[i].title}" by "${booklist.booklist[i].author}</p></th><th><form id="removebook${i}"><button class="removebutton" id="removebookbutton${i}" type="button">remove</button></form></th></tr>`;
      }
      removebooksection.innerHTML += bookhtml;
    }
    for (let j = 0; j < booklist.booklist.length; j += 1) {
      const removebutton = `#removebookbutton${j}`;
      document.querySelector(removebutton).addEventListener('click', () => {
        const prefix = removebutton[17];
        booklist.removeBook(prefix);
      });
    }
  };

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('booklist', JSON.stringify(booklist));
  });

  document.querySelector('#addbookbutton').addEventListener('click', () => {
    if (document.getElementById('titlename').value !== '' && document.getElementById('authorname').value !== '') {
      booklist.addBook(document.getElementById('titlename').value, document.getElementById('authorname').value);
    }
  });
});