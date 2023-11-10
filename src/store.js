import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cart";
import hamburger from "./features/hamburger";

export const store = configureStore({
  reducer: {
    cart,
    hamburger,
  },
});
