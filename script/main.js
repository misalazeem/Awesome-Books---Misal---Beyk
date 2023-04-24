class Books {
    constructor(title = '', author = ''){
        this.title = title;
        this.author = author;
    }
}
let bookdata = [];
document.addEventListener('DOMContentLoaded', () => {
    window.onload = () => {
      if (localStorage) {
        const localStorageItem = localStorage.getItem('bookdata');
        bookdata = JSON.parse(localStorageItem);
        if (bookdata == null) {
            bookdata = [];
        }
        const removebooksection = document.getElementById('removebooks');
        for(let i = 0; i < bookdata.length; i += 1){
          let bookhtml = `<form id="removebook${i}"><p>"${bookdata[i].title}"</p><p>${bookdata[i].author}</p><button id="removebookbutton${i}" type="submit">remove</button><hr></form>`
          removebooksection.innerHTML += bookhtml;
        }
    
      }
    };
    
    window.addEventListener('beforeunload', () => {
        JSON.stringify(bookdata);
        localStorage.setItem('bookdata', JSON.stringify(bookdata));
    });

    document.querySelector('#addbookbutton').addEventListener('click', () => {
      let bookobject = new Books();
      if (document.getElementById('titlename').value != '' &&  document.getElementById('authorname').value) {
        bookobject.title = document.getElementById('titlename').value;
        bookobject.author = document.getElementById('authorname').value;
      }
      bookdata.push(bookobject);
    });
});