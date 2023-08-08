function showProducts() {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => createList(Products))
      .catch(err => alert(err));
  }
  
  // Create element for products
  function createList(products) {
    const mainOl = document.createElement('ol');
  
    for (let i = 0; i < products.length; i++) {
      const productLi = document.createElement('li');
      productLi.innerHTML = products[i].name;
  
      const descriptionLi = document.createElement('li');
      descriptionLi.innerHTML = 'Description: ' + products[i].description;
  
      const limitLi = document.createElement('li');
      limitLi.innerHTML = 'Limit: ' + products[i].limit;
  
      productLi.appendChild(descriptionLi);
      productLi.appendChild(limitLi);
  
      mainOl.appendChild(productLi);
    }
  
    document.searchProducts.appendChild(mainOl);
  }

  // dom Elements
  const submit = document.getElementById('submit');
  const CustomerReview = document.getElementById('CustomerReview');
  const search = document.getElementById("search-products");
  const list = document.getElementById('products");

  //event listeners
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
    showProducts(); // Call the function to load products
  });
  
  submit.addEventListener('click', clickAlert);
  function clickAlert() {
    alert('Submitted!');
  }
  
  CustomerReview.addEventListener('submit', clickReviewAlert);
  function clickReviewAlert() {
    alert('Customer Review Clicked!');
  }

  function searchAlert() {
    alert('Searched!');
  }

    





