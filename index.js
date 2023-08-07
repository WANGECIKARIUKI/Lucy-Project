
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
  
    document.body.appendChild(mainOl);
  }

  //function to search for products
  function Products(){
  
    const productsUrl = "https://developer.safaricom.co.ke/APIs"
  
  return productsUrl

  const productData = {
    method: "POST",
    headers: {
        "content-type":"application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify()
    }
  }

  fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(Data => console.log(Data))
  .catch(error => {
      alert("Error Detected!")
      console.log(err.message)
  });


  // dom Elements
  const submit = document.getElementById('submit');
  const CustomerReview = document.getElementById('CustomerReview');
  const search = document.getElementById("search-products");
  const productform = document.getElementById("products-form");
  // event listeners.
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Products loaded");
    showProducts(); // Call the function to load products
  });
  
  submit.addEventListener('click', clickSubmitAlert);
  function clickSubmitAlert() {
    alert('Submitted!');
  }
  
  CustomerReview.addEventListener('click', clickReviewAlert);
  function clickReviewAlert() {
    alert('Customer Review Clicked!');
  }

  search.addEventListener('click', searchAlert);
  function searchAlert() {
    alert('Searchd!');
  }
    
    





