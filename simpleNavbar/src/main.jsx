import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { SearchProvider } from "./context/SearchProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </CartProvider>
);
