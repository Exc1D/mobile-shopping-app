/* 
===========================================
MOBILE GADGET SHOP APP - SOLO PROJECT
===========================================

TODO LIST - Complete these tasks in order:

1. ✅ SETUP & DATA
   - Import or access the gadgetsArray from data.js
   - Set up any global variables you need

2. ✅ RENDER PRODUCTS
   - Create a function to render all products from the array
   - Use array methods (map, forEach, etc.)
   - Display: emoji, name, specs, price, and add button
   - Add event listeners to the "Add to Cart" buttons

3. ✅ CART FUNCTIONALITY
   - Create an array to store cart items
   - Add items to cart when "Add to Cart" is clicked
   - Display the cart section when items are added
   - Calculate and display total price

4. ✅ REMOVE FROM CART
   - Add "remove" button functionality for each cart item
   - Update total when items are removed
   - Hide cart when empty

5. ✅ CHECKOUT FLOW
   - Handle checkout button click
   - Show payment modal (bonus feature)
   - Process payment and show confirmation
   - Clear cart after successful payment

6. 🎨 BONUS FEATURES (Optional challenges)
   - Add quantity counter for each product
   - Implement local storage to save cart
   - Add product search/filter functionality
   - Add animations and transitions
   - Implement form validation for payment

===========================================
*/

// TODO 1: Get the gadgets data (uncomment one of these options)
// Option A: If using modules, import the data
// import gadgetsArray from './data.js'

// Option B: If data.js is loaded via script tag, it's already available as gadgetsArray
// You can use gadgetsArray directly

// TODO 2: Set up global variables
// Create an empty array to store cart items
let cart = [];

// TODO 3: Get references to important DOM elements
// Hint: Use document.getElementById() or document.querySelector()
const productsList = document.getElementById("products-list");
const cartSection = document.getElementById("cart");
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const paymentModal = document.getElementById("payment-modal");
const payBtn = document.getElementById("pay-btn");

// TODO 4: Create a function to render products
// This function should:
// - Loop through gadgetsArray
// - Create HTML for each product
// - Add to the DOM
// - Set up event listeners for "Add to Cart" buttons

function renderProducts() {
  // Your code here
  // Hint: Use array.map() or forEach() to create HTML for each product
  // Template literal example:
  // `<div class="product-card">
  //     <div class="product-emoji">${product.emoji}</div>
  //     ...
  //  </div>`
  // Don't forget to add event listeners to the buttons!
}

// TODO 5: Create a function to add item to cart
// This function should:
// - Take a product ID as parameter
// - Find the product in gadgetsArray
// - Add it to the cart array
// - Call renderCart() to update the display

function addToCart(productId) {
  // Your code here
  // Hint: Use array.find() to get the product
  // Push the product to the cart array
  // Call renderCart()
}

// TODO 6: Create a function to render the cart
// This function should:
// - Show the cart section
// - Loop through cart items
// - Display each item with name, price, and remove button
// - Calculate and display total price

function renderCart() {
  // Your code here
  // Show cart section
  // cartSection.classList.add('show');
  // Clear previous cart items
  // cartItemsContainer.innerHTML = '';
  // Loop through cart and create HTML for each item
  // Calculate total price
  // Hint: Use array.reduce() to sum up prices
  // Update total price display
}

// TODO 7: Create a function to remove item from cart
// This function should:
// - Take an item index as parameter
// - Remove item from cart array
// - Re-render the cart
// - Hide cart if empty

function removeFromCart(index) {
  // Your code here
  // Hint: Use array.splice(index, 1)
  // Call renderCart()
  // If cart is empty, hide cart section
}

// TODO 8: Create a function to calculate total price
// This function should:
// - Loop through cart items
// - Sum up all prices
// - Return the total

function calculateTotal() {
  // Your code here
  // Hint: Use array.reduce()
  // return cart.reduce((total, item) => total + item.price, 0);
}

// TODO 9: Set up checkout button event listener
// When clicked:
// - Show payment modal (bonus)
// - Or process order directly

checkoutBtn.addEventListener("click", function () {
  // Your code here
  // Show modal: paymentModal.classList.add('show');
  // Or show a simple alert with order confirmation
});

// TODO 10: BONUS - Set up payment modal functionality
// When pay button is clicked:
// - Get form values
// - Validate inputs
// - Show success message
// - Clear cart
// - Hide modal

payBtn.addEventListener("click", function () {
  // Your code here
  // Get input values
  // const cardName = document.getElementById('card-name').value;
  // Validate
  // if (!cardName) { alert('Please enter your name'); return; }
  // Show success message
  // alert(`Thanks ${cardName}! Your order is on its way!`);
  // Clear cart and close modal
});

// TODO 11: Initialize the app
// Call renderProducts() when page loads

// Your code here
// renderProducts();

/* 
===========================================
TIPS & HINTS:
===========================================

1. Array Methods You'll Need:
   - map() - to transform data
   - forEach() - to loop through items
   - find() - to find a specific item
   - filter() - to filter items
   - reduce() - to calculate totals

2. DOM Manipulation:
   - innerHTML - to insert HTML
   - addEventListener() - to handle clicks
   - classList.add/remove() - to show/hide elements

3. Template Literals:
   - Use backticks `` for multi-line HTML
   - Use ${variable} to insert values

4. Event Delegation:
   - Consider adding one listener to parent instead of many to children
   - Use event.target to identify which element was clicked

5. Debugging:
   - Use console.log() to check your variables
   - Check the browser console for errors
   - Use debugger; to pause code execution

===========================================
GOOD LUCK! 🚀
===========================================
*/
