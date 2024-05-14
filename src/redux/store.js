import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"

const store = configureStore({
   reducer: {
      cart: cartReducer
   }
})

// console.log("on create: ", store.getState())
// store.subscribe(() => console.log("on update", store.getState()))

export default store