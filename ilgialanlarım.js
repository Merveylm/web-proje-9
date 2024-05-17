function searchBooks() {
  var query = document.getElementById("searchInput").value;
  fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then(response => response.json())
      .then(data => {
          displayResults(data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

function displayResults(data) {
  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  data.docs.forEach(book => {
      var title = book.title;
      var author = book.author_name ? book.author_name.join(", ") : "Unknown";
      var coverId = book.cover_i ? book.cover_i : "";
      var coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
      var html = `
          <div>
              <img src="${coverUrl}" alt="${title}" style="max-width: 100px;">
              <h2>${title}</h2>
              <p>Author(s): ${author}</p>
          </div>
      `;
      resultsDiv.innerHTML += html;
  });
}
