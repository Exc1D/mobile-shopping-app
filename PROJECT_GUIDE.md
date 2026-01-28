# 🛍️ TechHub - Mobile Gadget Shop

A solo project for Scrimba's Essential JavaScript Mini Projects Module, transformed into an iOS-inspired gadget shopping experience.

## 📱 Project Overview

Transform a restaurant menu app into a sleek, modern gadget shop with iOS-inspired design. This project will help you practice:
- DOM manipulation
- Event listeners
- Array methods
- Dynamic rendering
- Cart functionality

## 🎯 Learning Objectives

By completing this project, you will:
- ✅ Render dynamic content from arrays
- ✅ Handle user interactions with event listeners
- ✅ Manage application state (cart data)
- ✅ Manipulate the DOM efficiently
- ✅ Calculate totals and update UI in real-time
- ✅ Create a complete e-commerce flow

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Understanding of arrays and objects
- Familiarity with DOM manipulation

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and start coding!

## 📋 Task Checklist

Follow these tasks in `index.js` to complete the project:

### Core Features (Required)
- [ ] **Task 1**: Access the gadgets data from `data.js`
- [ ] **Task 2**: Set up global variables (cart array)
- [ ] **Task 3**: Get DOM element references
- [ ] **Task 4**: Create `renderProducts()` function
- [ ] **Task 5**: Create `addToCart()` function
- [ ] **Task 6**: Create `renderCart()` function
- [ ] **Task 7**: Create `removeFromCart()` function
- [ ] **Task 8**: Create `calculateTotal()` function
- [ ] **Task 9**: Set up checkout button event listener
- [ ] **Task 10**: Initialize the app by calling `renderProducts()`

### Bonus Features (Optional)
- [ ] **Bonus 1**: Implement payment modal with form validation
- [ ] **Bonus 2**: Add quantity counter for products
- [ ] **Bonus 3**: Save cart to localStorage
- [ ] **Bonus 4**: Add search/filter functionality
- [ ] **Bonus 5**: Add smooth animations and transitions
- [ ] **Bonus 6**: Make it fully responsive

## 🎨 Design Features

### iOS-Inspired Elements
- **SF Pro Font Family**: Authentic iOS typography
- **Card-based Layout**: Rounded corners and subtle shadows
- **Color System**: iOS-inspired color palette with CSS variables
- **Smooth Transitions**: Hover and active states
- **Modal Overlays**: Backdrop blur effects
- **Gradient Header**: Eye-catching purple gradient

### Color Palette
```css
--ios-bg: #F2F2F7         /* Background gray */
--ios-card-bg: #FFFFFF    /* Pure white cards */
--ios-accent: #007AFF     /* iOS blue */
--ios-text-primary: #000  /* Black text */
--ios-text-secondary: #8E8E93 /* Gray text */
```

## 📁 File Structure

```
├── index.html          # Main HTML structure with TODO comments
├── index.css           # iOS-inspired styles with TODO comments
├── index.js            # JavaScript logic (YOUR WORK HERE!)
├── data.js             # Product data array
├── package.json        # Project configuration
└── README.md          # This file
```

## 💡 Key Concepts to Practice

### 1. Array Methods
```javascript
// map() - Transform data
gadgetsArray.map(product => `<div>${product.name}</div>`)

// forEach() - Loop through items
cart.forEach(item => console.log(item))

// find() - Find specific item
gadgetsArray.find(product => product.id === 0)

// reduce() - Calculate totals
cart.reduce((total, item) => total + item.price, 0)
```

### 2. Template Literals
```javascript
const html = `
  <div class="product-card">
    <div class="product-emoji">${product.emoji}</div>
    <h3>${product.name}</h3>
  </div>
`
```

### 3. Event Listeners
```javascript
button.addEventListener('click', function() {
  // Handle click
})
```

### 4. DOM Manipulation
```javascript
// Update content
element.innerHTML = 'New content'

// Show/hide elements
element.classList.add('show')
element.classList.remove('show')
```

## 🔍 Debugging Tips

1. **Use Console.log()**
   - Check variable values
   - Track function execution
   - Debug array contents

2. **Browser DevTools**
   - Inspect elements
   - View console errors
   - Use debugger breakpoints

3. **Common Issues**
   - Check element IDs match between HTML and JS
   - Verify array data structure
   - Ensure event listeners are attached

## 🌟 Success Criteria

Your app should:
- ✅ Display all products from the data array
- ✅ Add products to cart when clicking "Add" button
- ✅ Show cart section when items are added
- ✅ Display cart items with remove buttons
- ✅ Calculate and display correct total
- ✅ Remove items from cart when clicking remove
- ✅ Hide cart when empty
- ✅ Handle checkout process

## 🎓 Learning Resources

- [MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs - DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [JavaScript.info - Arrays](https://javascript.info/array-methods)

## 🚀 Next Steps

After completing the core features:
1. Add more products to `data.js`
2. Implement the bonus features
3. Customize the design colors
4. Add your own creative features
5. Share your project!

## 📝 Notes

- All files have detailed TODO comments to guide you
- Start with the core features before attempting bonuses
- Test each function as you build it
- Don't hesitate to experiment and add your own ideas!

## 🎉 About This Project

This is a solo project for Scrimba's Essential JavaScript course, redesigned with an iOS-inspired aesthetic to make learning more engaging and modern.

**Happy Coding!** 💜

---

Built with ❤️ as part of Scrimba's Frontend Developer Career Path
