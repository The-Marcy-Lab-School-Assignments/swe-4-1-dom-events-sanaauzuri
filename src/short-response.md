# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

1. The error is either a reference error or a null error
2. This error occurs because the `<script>` tag is placed in the `<head>`, which means Javascript runs before the browser accesses the`<body>` of the HTML. So when `document.querySelector('#my-button')` runs, the script is referencing that element before it exists. The `querySelector` will return null and the code breaks.
3. The fix is to move the `<script src="index.js">` tag to the end of the `<body>` so the script runs after the HTML is loaded


## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**


## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
The issue is that `productImage`, `productName`, and `productPrice` were never appended to `productCard` The code appends `productCard` to the `document.body`, but since nothing was appended **into** `productCard`, it shows as an empty div. The fix is to call `productCard.append(productImage, productName, productPrice)` before appending `productCard` to the body.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

1. This approach is called **event delegation**. The alternative is adding a separate event listener to each `<li> `element individually. **Event delegation** is a better approach because it uses just one listener on the parent (`<ul>`) and use `event.target` to tell which child was clicked, which is more efficient and concise code.

2. The `event.target.closest('li')` method finds the nearest ancestor (or the element itself) that matches the `li` selector. It's essential because it allows the code to identify which to-do was clicked.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

1. `querySelector()` returns the first single element that matches the CSS selector, or `null` if nothing matches. `querySelectorAll()` returns a **NodeList**, a collection of all matching elements. You'd use `querySelectorAll()` when you need to work with multiple elements at once. For example: `document.querySelectorAll('.todo-item')` grabs every item in a to-do list.


2. The difference between **NodeList** and an array is that **NodeList** can only use array methods besides `forEach` if it is converted using `Array.from()` first, while an array can use any array methods without conversion. Knowing this difference prevents errors/bugs from trying to call array methods on **NodeList**
