# Frontend Shop Demo

This repository contains a demo e-commerce web application designed to showcase a basic shopping cart and promotional pricing logic. The goal is to provide an initial working prototype (“demo”) for a client in the e-commerce sector, illustrating how products can be displayed, added to a cart, and have promotions applied before checkout.

<br>

## Project Overview

The purpose of this repository is to provide a lightweight, proof-of-concept e-commerce frontend that demonstrates:

Displaying a small catalog of products (9 items, divided into 3 sections).

Allowing users to add/remove items to/from a shopping cart.

Calculating and applying promotional discounts on the final purchase total.

Because there is no backend API integration at this stage, all product data is hardcoded directly in the frontend. This demo serves primarily to validate the UI flow, core JavaScript logic, and overall user experience before hooking up to real data sources in subsequent sprints.

<br>

## Key Features

Product Listing

Three distinct product categories (sections) with three products each.

Each product card displays an image, name, price, and “Add to Cart” button.

Shopping Cart Management

Users can add items to the cart by clicking “Add to Cart.”

Cart updates in real time: shows quantity, subtotal per line item, and overall total.

Ability to increase/decrease quantity or remove items completely.

Promotional Pricing

A set of predefined promotions (percentage-off, “buy X get Y free,” fixed-dollar discounts, etc.).

Promotions automatically apply at checkout based on cart contents.

Final price display reflects the applied promos and updated total.

Separation of Concerns

All presentation (HTML + CSS) lives in static files.

Core shopping logic lives in src/shop.js and src/checkout.js.

Styles are managed by simple CSS (no preprocessor currently).

<br>

## Technologies Used

This demo is built with the following technologies:

HTML5
Basic structure of the pages (index.html, checkout.html, etc.).

CSS3

Bootstrap for layout.

Responsive design principles to adapt to different viewport sizes.

Simple stylesheet (styles.css) for basic styling (colors, fonts, spacing).

JavaScript (ES6+)

Modular code (using import/export) where supported.

src/shop.js: handles product rendering and cart operations.

src/checkout.js: calculates totals and applies promotions.


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
