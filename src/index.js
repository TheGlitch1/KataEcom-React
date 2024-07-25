import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ProductsProvider } from "./contexts/products_context";
import { FilterProvider } from "./contexts/filter_context";
import { CartProvider } from "./contexts/cart_context";


//? Contexts
ReactDOM.createRoot(document.getElementById("root")).render(
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
);
