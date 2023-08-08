 document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
  
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
  
    document.searchProduct.appendChild(mainOl);
  }

  //function to search for products
  function searchProduct(){
  
    const productsUrl = "http://localhost:3000/products"
  
  return searchProducts;

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
  const searchProduct = document.getElementById("search-product");

  // Event Listener
  submit.addEventListener('click', clickSubmitAlert);
  function clickSubmitAlert() {
    alert('Submitted!');
  }
  
  CustomerReview.addEventListener('submit', clickReviewAlert);
  function clickReviewAlert() {
    alert('Customer Review Clicked!');
  }

  searchProduct.addEventListener('click', (e) => {
    e.preventDefault();
    productform();
    submit();
 
  } );
  function searchAlert() {
    alert('Searched!');
  }

//variable to keep track of the search product
let products = "";
let keyword = "i";

//function to diplay products
function showProducts(){
  keyword=search.value;
}
   });
    





