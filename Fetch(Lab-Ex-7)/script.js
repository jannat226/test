document.addEventListener("DOMContentLoaded", function () {
  const fetchBooksButton = document.getElementById("fetchBooks");
  const bookList = document.getElementById("bookList");

  fetchBooksButton.addEventListener("click", function () {
    // Make an AJAX request to the JSON API
    const apiKey = "AIzaSyDlRhIk_qB3b2x5KZEHkc0UE3W4TuQKDU4";

    fetch(
      //   `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDlRhIk_qB3b2x5KZEHkc0UE3W4TuQKDU4`
    )
      .then((response) => {
        response.json().then((res) => {
          res.items.forEach((book) => {
            console.log(book);
            const bookItem = document.getElementById("bookList");
            // bookItem.className = "book"; //creates a classname of that id just like we do in html
            bookItem.innerHTML += `<tr style="border: 1px solid" ><td>${
              book.volumeInfo.title
            }</td>
               
                <td>${
                  book.volumeInfo.description ? book.volumeInfo.description : ""
                }</td>
                <td>${book.volumeInfo.publishedDate}</td>
                </tr>`;
            // bookList.appendChild(bookItem);
          });
        });
      })
      //   .then((response) => {
      //     response.json().then((res) => {
      //       console.log(res);
      //       // Process the JSON data and display it
      //       res.items.forEach((book) => {
      //         const bookItem = document.createElement("div");
      //         bookItem.className = "book";
      //         bookItem.innerHTML = `
      //             <h2>${book.volumeInfo.title}</h2>
      //             <p>Author: ${
      //               book.volumeInfo.authors
      //                 ? book.volumeInfo.authors.join(", ")
      //                 : "Unknown"
      //             }</p>
      //             <p>Published Date: ${book.volumeInfo.publishedDate}</p>
      //             <p>Description: ${book.volumeInfo.description || "N/A"}</p>
      //         `;
      //         bookList.appendChild(bookItem);
      //       });
      //     });
      //   })

      .catch((error) => {
        console.error("Error fetching books data:", error);
      });
  });
});
