import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import ProductProvider from "./contexts/ProductContext"; //product provider
import CartProvider from "./contexts/CartContext";
import UserStatusProvider from "./contexts/UserStatusContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserStatusProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </UserStatusProvider>
);
