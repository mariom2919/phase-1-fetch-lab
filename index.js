function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  // Fetch data from the API
  return fetch(url)
    .then(response => response.json())  // Convert response to JSON
    .then(data => renderBooks(data));   // Call renderBooks with JSON data
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
