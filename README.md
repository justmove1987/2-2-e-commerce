# Frontend Shop Demo

This repository contains a demo e-commerce web application designed to showcase a basic shopping cart and promotional pricing logic. The goal is to provide an initial working prototype (“demo”) for a client in the e-commerce sector, illustrating how products can be displayed, added to a cart, and have promotions applied before checkout.

<br>


## 📖 Project Overview

This repository contains a demo front-end e-commerce application with:

- **Catalog** of 9 products divided into 3 categories.  
- **Shopping cart** featuring real-time quantity and subtotal updates.  
- **Promotions engine** applying discounts automatically (percentage off, “buy X get Y free,” fixed-amount discounts, etc.).  
- All data is hardcoded—no API calls—so you can focus on UI and logic.

The goal is to deliver a minimally viable product (MVP) that stakeholders can click through, review, and approve before backend integration in future sprints.

---

## ✨ Key Features

1. **Product Listing**  
   - 3 sections (e.g. Fruits, Dairy, Beverages).  
   - Each product card displays image, name, price, and “Add to Cart” button.

2. **Cart Management**  
   - Add or remove items.  
   - Increase/decrease quantity.  
   - Remove line items entirely.  
   - Line-item subtotals and overall total update instantly.

3. **Automatic Promotions**  
   - Percentage discounts (e.g. 10% off when total exceeds a threshold).  
   - “Buy X, get Y free” deals.  
   - Fixed-amount discounts (e.g. €5 off when spending over €50).  
   - Promotions apply during checkout and adjust the final total.

4. **Separation of Concerns**  
   - Static HTML & CSS under `public/`.  
   - Core logic in ES6 modules (`src/shop.js`, `src/checkout.js`).  
   - Styling with Bootstrap + a simple `styles.css`.

---

<br>

## 🛠 Technologies

- **HTML5 & CSS3**  
- **Bootstrap 5** for layout and basic components.  
- **JavaScript (ES6+)**  
  - Modular code using `import`/`export`.  
  - Pure functions and classes where appropriate.  
- **Git & GitHub** for version control.

---


<br>

# Sprint 2 IT Academy | Shop

## Introduction

A company in the e-commerce sector has asked us for a web application that allows them to offer the purchase of their products through the internet.

You will be in charge of setting up an initial demo version of the application for the client: management of the shopping cart and the application of the promotions on the final price. You have 1 week to finish this part of sprint (2.2).

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-shop
```

2. Unlink your repo from the itacademy repository.
(Explanation: You have to upload the code to your GitHub repository, not to the IT Academy. That's why you have to unlink your project from IT Academy GitHub with the following command)

```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
(Explanation: Now your project is not linked to any remote repository. In order to upload your code, you have to link your project to the new repository created on github.com using the following command)

```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. It is necessary to upload each exercise in a separate commit. The commit name must clearly indicate its content.

2. Upload the link to your GitHub repository to the virtual campus, enabling your mentor to review and provide feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>


## Instructions

You have the following indications from the frontend manager:

- You have prepared the base of the project on which you will work: https://github.com/IT-Academy-BCN/starter-code-frontend-shop

- The base of the project on which you will work has already created all the files, and an initial version of the interface, so you can focus on programming the logic.

- As at the moment we don't consume data from a server using an API, we will work with hardcoded data in the application. For the moment we will implement the logic using a small group of 9 products divided in 3 sections.

- Except for the last level, showing the result of the functions by console is enough.

- The logic to implement will be placed in the src/grocery.js and src/checkout.js files. You will see that the built in functions have already been created for you to implement them.

- It is forbidden to copy the code, since this way you don't learn anything. Furthermore, as you can see, the second release of sprint 5 is a mini-level test with the mentor, in which you will have to demonstrate live that you have acquired the javascript concepts. Don't worry, if you work on the releases you won't have any problems.


<br>



## Business Logic
# src/shop.js
renderProducts()

    Iterates over a hardcoded products array.

    Generates and injects product cards with “Add to Cart” buttons.

Cart State

    Maintained as an object: { [productId]: quantity }.

    Methods:

    addToCart(productId)

    removeFromCart(productId)

    updateQuantity(productId, qty)

    renderCart() — updates the cart display and subtotal before promotions.

# src/checkout.js
calculateSubtotal(cart, products)

    Computes price × quantity sum across all items.

applyPromotions(cart, products, promotions)

    Loops through a hardcoded promotions array.

    Returns { discountTotal, details: […] }.

Promotion Helpers

    percentageOff(threshold, percent)

    buyXGetYFree(productId, x, y)

    fixedDiscount(threshold, amount)

Checkout Flow

    Load cart from localStorage or session.

    Calculate subtotal.

    Apply promotions.

    Compute final total = subtotal − discountTotal.

    Render summary on checkout.html.
