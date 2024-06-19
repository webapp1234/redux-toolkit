import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./admin/reducer/reducer";

let store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
});

export default store;
