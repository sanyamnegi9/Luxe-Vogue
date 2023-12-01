import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import ProductProvider from "./contexts/ProductContext"; //product provider
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ProductProvider>
        <App />
    </ProductProvider>
  </CartProvider>
);
