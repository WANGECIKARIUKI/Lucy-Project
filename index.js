function showProducts() {
  fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => createList(data.products))
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

// dom Elements
const submit = document.getElementById('submit');
const customerReview = document.getElementById('customerReview');

// event listeners.
document.addEventListener("DOMContentLoaded", function() {
  console.log("Products loaded");
  showProducts(); // Call the function to load products
});

submit.addEventListener('click', clickSubmitAlert);
function clickSubmitAlert() {
  alert('Submitted!');
}

customerReview.addEventListener('click', clickReviewAlert);
function clickReviewAlert() {
  alert('Customer Review Clicked!');
}
