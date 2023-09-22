document.addEventListener("DOMContentLoaded", function () {
  const fetchBooksButton = document.getElementById("fetchProducts");

  fetchBooksButton.addEventListener("click", function () {
    fetch(`https://jannat226.github.io/Lab-exercise-8/products.json`)
      //   .then((response) =>
      //     response.json().then((res) => {
      //       console.log(res);
      //     })
      //   )

      .then((response) => {
        // console.log(response);
        response.json().then((res) => {
          res.forEach((products) => {
            console.log(products);
            const productItem = document.getElementById("productList");

            productItem.innerHTML += `<tr  >
                    <td>${products.name}</td>
                    <td>${products.description}</td>
                    <td>${products.price}</td>
                    <td><a href="${products.image_url}">${products.image_url}</a></td>
                    </tr>`;
          });
        });
      })

      .catch((error) => {
        console.error("Error fetching products data:", error);
      });
  });
});
