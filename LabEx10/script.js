let allProducts = [];


function addCard(product) {
  const template = document.getElementById("product-template")
    .content.cloneNode(true);

  template.querySelector('.product-image').src = product.image;
  template.querySelector('.product-title').innerText = product.title;
  template.querySelector('.product-price').innerText = "$" + product.price;
  template.querySelector('.product-description').innerText = product.description;

  document.querySelector('#product-list').appendChild(template);
}


function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => addCard(product));
}


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    allProducts = products;

    
    displayProducts(allProducts);


    const categories = [...new Set(allProducts.map(product => product.category))];
    const categorySelect = document.getElementById("category-select");

    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.innerText = category;
      categorySelect.appendChild(option);
    });
  });


document.getElementById("category-select").addEventListener("change", (event) => {
  const selectedCategory = event.target.value;

  if (selectedCategory === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter(product => product.category === selectedCategory);
    displayProducts(filtered);
  }
});