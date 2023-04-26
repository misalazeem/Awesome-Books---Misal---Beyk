class Books {
    constructor(title = '', author = '') {
      this.title = title;
      this.author = author;
    }
  }
  
  class BooksObject {
    constructor(object = []){
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
    
    addBook(title,author) {
      const bookobject1 = new Books();
      bookobject1.author = author;
      bookobject1.title = title;
      this.booklist.push(bookobject1);
      displaynewbook();
      document.getElementById('titlename').value = '';
      document.getElementById('authorname').value = '';
    }
  
    removeBook(index) {
      this.booklist.splice(index, 1);
      let bookhtml;
      const removebooksection = document.getElementById('removebookstable');
      removebooksection.innerHTML = '';
      for (let i = 0; i < booklist.booklist.length; i += 1) {
        let bookhtml;
        if(i % 2 == 1){
          bookhtml = `<tr class="greyrow"><th><p>"${booklist.booklist[i].title}" by "${booklist.booklist[i].author}</p></th><th><form id="removebook${i}"><button class="removebutton" id="removebookbutton${i}" type="button">remove</button></form></th></tr>`;
        }
        else {
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
    }
  
  }