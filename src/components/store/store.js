import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cardSlice from "./slices/cardSlice";

export default configureStore({
  reducer: {
    userSlice,
    cardSlice
  }
})