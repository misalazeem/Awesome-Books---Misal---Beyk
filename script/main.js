class Books {
  constructor(title = '', author = '') {
    this.title = title;
    this.author = author;
  }
}

let bookdata = [];

function RemoveObject(index) {
  bookdata.splice(index, 1);
}

document.addEventListener('DOMContentLoaded', () => {
  window.onload = () => {
    if (localStorage) {
      const localStorageItem = localStorage.getItem('bookdata');
      bookdata = JSON.parse(localStorageItem);
      if (bookdata == null) {
        bookdata = [];
      }
    }
    const removebooksection = document.getElementById('removebooks');
    for (let i = 0; i < bookdata.length; i += 1) {
      const bookhtml = `<form id="removebook${i}"><p>"${bookdata[i].title}"</p><p>${bookdata[i].author}</p><button id="removebookbutton${i}" type="submit">remove</button><hr></form>`;
      removebooksection.innerHTML += bookhtml;
    }
    for (let j = 0; j < bookdata.length; j += 1) {
      const removebutton = `#removebookbutton${j}`;
      document.querySelector(removebutton).addEventListener('click', () => {
        const prefix = removebutton[17];
        RemoveObject(prefix);
      });
    }
  };

  window.addEventListener('beforeunload', () => {
    JSON.stringify(bookdata);
    localStorage.setItem('bookdata', JSON.stringify(bookdata));
  });

  document.querySelector('#addbookbutton').addEventListener('click', () => {
    const bookobject = new Books();
    if (document.getElementById('titlename').value !== '' && document.getElementById('authorname').value !== '') {
      bookobject.title = document.getElementById('titlename').value;
      bookobject.author = document.getElementById('authorname').value;
      bookdata.push(bookobject);
    }
  });
});