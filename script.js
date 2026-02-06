import { gadgetsArray } from "./data.js";
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
   - IMPORTANT: Wrap each product in an <article> element with class="product-card"
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
   - Show payment dialog/modal (bonus feature)
   - Process payment and show confirmation
   - Clear cart after successful payment

6. 🎨 BONUS FEATURES (Optional challenges)
   - Add quantity counter for each product
   - Implement local storage to save cart
   - Add product search/filter functionality
   - Add animations and transitions
   - Implement form validation for payment
   - Use the modern <dialog> element for the modal

===========================================
NOTE: This project now uses semantic HTML!
- Products are wrapped in <article> elements
- Cart items are <li> elements in a <ul>
- The modal uses the <dialog> element
===========================================
*/


// Your DOM element references here
const productsList = document.getElementById("products-list");
const cartSection = document.getElementById("cart");
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const paymentModal = document.getElementById("payment-modal");
const payBtn = document.getElementById("pay-btn");

let cart = []

function renderProducts(gadgetsArray){
   const productHTML = gadgetsArray.map((product) => {
      return `
      <article class="product-card ${product.class}">
         <div class="product-emoji">${product.emoji}</div>
         <div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-specs">${product.specs.join(', ')}</p>
            <p class="product-price">$${product.price}</p>
         </div>
         <div class="checkout-container">    
            <button class="add-btn" data-id="${product.id}">Buy</button>
          </div>
      </article>
      `
   }).join("");
   productsList.innerHTML = productHTML;

   document.querySelectorAll(".add-btn").forEach(btn => {
   btn.addEventListener("click", (e) => {
   const productId = parseInt(e.target.dataset.id);
   addToCart(productId);
   });

   });

}

function addToCart(productId){
   const product = gadgetsArray.find(item => item.id === productId);
   if(product){
      cart.push(product);
   }
   renderCart()
} 

// ============================================
// TODO 6: Create a function to render the cart
// ============================================
// This function should:
// 1. Show the cart section (add 'show' class)
// 2. Clear any previous cart items
// 3. Loop through cart array and create HTML for each item
// 4. Each cart item should be an <li> element
// 5. Calculate the total price
// 6. Update the total price display
// 7. If cart is empty, hide the cart section

// IMPORTANT: Each cart item should be an <li> element!
// HTML structure example:
// <li class="cart-item">
//     <span class="cart-item-name">${item.name}</span>
//     <button class="cart-item-remove" data-index="${index}">remove</button>
//     <span class="cart-item-price">$${item.price}</span>
// </li>

// Your renderCart function here
function renderCart(){
   document.getElementById("item-count").textContent = cart.length
   cartItemsContainer.innerHTML = ""
   cart.forEach((item) => {
      cartItemsContainer.innerHTML +=
      `
      <li class="cart-item">
         <span class="cart-item-name">${item.name}</span>
         <div class="quantity-container">
               <button class="subtract" id="subtract-item">-</button>
               <input class="quantity-display"id="quantity-display" placeholder="0" readonly>
               <button class="add-items" id="add-item">+</button>     
         </div>  
         <span class="cart-item-price">${item.price}</span>
      </li>
      `
   })
}

// ============================================
// TODO 7: Create a function to remove item from cart
// ============================================
// This function should:
// 1. Take an item index as parameter
// 2. Remove the item from cart array using splice()
// 3. Call renderCart() to update the display

// Hint: Use array.splice(index, 1) to remove one item at the given index

// Your removeFromCart function here

// ============================================
// TODO 8: Create a function to calculate total price
// ============================================
// This function should:
// 1. Loop through cart items
// 2. Sum up all the prices
// 3. Return the total

// Hint: Use array.reduce() like this:
// return cart.reduce((total, item) => total + item.price, 0);

// Your calculateTotal function here

// ============================================
// TODO 9: Set up checkout button event listener
// ============================================
// When the checkout button is clicked:
// - Show the payment modal (BONUS: use dialog.showModal() for modern approach)
// - Or show a simple alert with order confirmation

// MODERN APPROACH (recommended if you built the dialog element):
// Use: paymentModal.showModal();

// FALLBACK APPROACH (if using div with .modal class):
// Use: paymentModal.classList.add('show');

// Your checkout button event listener here

// ============================================
// TODO 10: BONUS - Set up payment modal functionality
// ============================================
// When the pay button is clicked:
// 1. Prevent default form submission (if using a form)
// 2. Get the form input values (card name, number, CVV)
// 3. Validate that all fields are filled
// 4. Show a success message
// 5. Clear the cart array
// 6. Call renderCart() to update the display
// 7. Close the modal
// 8. Reset the form

// MODERN APPROACH (for dialog element):
// Use: paymentModal.close();

// FALLBACK APPROACH (for div modal):
// Use: paymentModal.classList.remove('show');

// Your payment modal event listener here

// ============================================
// BONUS: Close modal when clicking outside (for div-based modals)
// ============================================
// Add a click listener to the modal that closes it
// when clicking on the backdrop (not the content)

// Your modal backdrop click listener here (optional)

// ============================================
// TODO 11: Initialize the app
// ============================================
// Call renderProducts() when the page loads
// This will display all the products

// Your initialization code here
renderProducts(gadgetsArray);
document.getElementById("cart-btn").addEventListener("click", () => cartSection.style.display = "flex")
   document.getElementById("close-cart-btn").addEventListener("click", () => cartSection.style.display = "none")

/* 
===========================================
TIPS & HINTS FOR SUCCESS:
===========================================

1. ARRAY METHODS YOU'LL NEED:
   --------------------------------
   map() - Transform data into HTML
   Example: gadgetsArray.map(product => `<div>${product.name}</div>`)
   
   forEach() - Loop through items
   Example: cart.forEach(item => console.log(item))
   
   find() - Find a specific item
   Example: gadgetsArray.find(product => product.id === 0)
   
   reduce() - Calculate totals
   Example: cart.reduce((total, item) => total + item.price, 0)
   
   splice() - Remove items from array
   Example: cart.splice(index, 1)

2. DOM MANIPULATION:
   --------------------------------
   Get element: document.getElementById('id')
   Set HTML: element.innerHTML = 'content'
   Add class: element.classList.add('class-name')
   Remove class: element.classList.remove('class-name')
   Add listener: element.addEventListener('click', function)

3. TEMPLATE LITERALS:
   --------------------------------
   Use backticks `` for multi-line HTML
   Use ${variable} to insert values
   Example:
   const html = `
     <div class="card">
       <h3>${product.name}</h3>
       <p>$${product.price}</p>
     </div>
   `

4. SEMANTIC HTML STRUCTURE:
   --------------------------------
   Products: <article class="product-card">...</article>
   Cart Items: <li class="cart-item">...</li>
   Modal: <dialog id="payment-modal">...</dialog>

5. DIALOG ELEMENT (Modern):
   --------------------------------
   Open: dialog.showModal()
   Close: dialog.close()
   Backdrop: Automatically created by browser

6. EVENT DELEGATION (Advanced):
   --------------------------------
   Instead of adding listeners to each button,
   add ONE listener to the parent:
   
   productsList.addEventListener('click', function(e) {
     if (e.target.classList.contains('add-btn')) {
       const id = parseInt(e.target.dataset.id);
       addToCart(id);
     }
   });

7. DEBUGGING TIPS:
   --------------------------------
   - Use console.log() to check values
   - Check browser console for errors (F12)
   - Use console.table(cart) to see cart contents
   - Add debugger; to pause code execution
   - Check that IDs and classes match HTML

8. COMMON MISTAKES TO AVOID:
   --------------------------------
   - Forgetting to call functions (renderProducts, renderCart)
   - Not converting data-id to number: parseInt(e.target.dataset.id)
   - Forgetting to check if cart is empty before hiding
   - Not adding event listeners after rendering HTML
   - Misspelling class names or IDs

9. RECOMMENDED ORDER:
   --------------------------------
   1. Set up variables and get DOM elements
   2. Create and call renderProducts()
   3. Create addToCart() and test it
   4. Create renderCart() and test it
   5. Create calculateTotal() and use it in renderCart()
   6. Create removeFromCart() and test it
   7. Add checkout functionality
   8. BONUS: Add payment modal

10. TESTING AS YOU GO:
    --------------------------------
    After each function:
    - Save your file
    - Refresh the browser
    - Open the console (F12)
    - Test the functionality
    - Fix any errors before moving on

===========================================
YOU'VE GOT THIS! 🚀
===========================================

Remember:
- Read the task comments carefully
- Build one function at a time
- Test after each step
- Use console.log() liberally
- Don't be afraid to experiment!

Good luck with your project!
*/
