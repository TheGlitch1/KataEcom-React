## Project
The project utilizes a fake API to display products and mimic cart functionality of an e-commerce type. It includes the following key features:

- **Listing Products**: The project fetches products from the API and displays them in a list.
- **Filtering Products**: Users can filter the products list based on different properties.
- **Product Consultation**: Users can view detailed information about a specific product.
- **Add to Cart**: Users can add products to their cart.
- **Cart Management**: Users can view their cart, delete items from the cart, and adjust the quantity of items in the cart.

## Project Structure Overview
**Structure:** Simple Folder Structure

**Key Technicalities:**

**Component-Based Architecture:**

The project is structured around reusable and modular components, enhancing maintainability and scalability.

**React Framework:**

Built using React, a popular JavaScript library for building user interfaces, enabling efficient component-based development.

**Context API:**

Utilizes React's Context API for state management (cart_context.js, filter_context.js, products_context.js), allowing for efficient state sharing across components without prop drilling.

**Styled Components:**

Uses styled-components for styling, enabling scoped and dynamic styles within components for a modular and maintainable CSS architecture.

**Routing:**

Implements client-side routing with React Router (ConfigRoutes.js), providing a seamless single-page application experience.

**Utility Functions and Constants:**

Contains utility functions and constants (actions.js, constants.js, helpers.js) for reusable logic and configuration.

**Reducer Pattern:**

Employs the reducer pattern for managing complex state logic (cart_reducer.js, filter_reducer.js, products_reducer.js), following a unidirectional data flow.


```
└── 📁src
    └── App.js
    └── 📁assets
        └── about_img.jpg
        └── hero_img.png
    └── 📁components
        └── AddToCart.js
        └── AmountButtons.js
        └── Breadcrumb.js
        └── CartButtons.js
        └── CartItem.js
        └── CartTotals.js
        └── Contact.js
        └── EmptyCart.js
        └── Error.js
        └── Filters.js
        └── Footer.js
        └── GridProducts.js
        └── Hero.js
        └── index.js
        └── ListProducts.js
        └── Loading.js
        └── Navbar.js
        └── Products.js
        └── Services.js
        └── 📁share
            └── Button.js
            └── Icons.js
            └── Typography.js
        └── Sidebar.js
        └── Sort.js
        └── Stars.js
    └── 📁contexts
        └── cart_context.js
        └── filter_context.js
        └── products_context.js
    └── index.js
    └── 📁pages
        └── AboutPage.js
        └── CartPage.js
        └── CheckoutPage.js
        └── ErrorPage.js
        └── HomePage.js
        └── ProductsPage.js
        └── SingleProductPage.js
    └── 📁reducers
        └── cart_reducer.js
        └── filter_reducer.js
        └── products_reducer.js
    └── 📁routes
        └── ConfigRoutes.js
    └── 📁styles
        └── GlobalStyle.js
        └── GlobalStyle.js.old
        └── Screen.js
    └── 📁utils
        └── actions.js
        └── constants.js
        └── helpers.js
```