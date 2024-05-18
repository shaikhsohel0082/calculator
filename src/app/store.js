import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "../features/Redux/toggleReducer";

//creating store 
export const store = configureStore({
  reducer: {
    toggleReducer,
  },
});
