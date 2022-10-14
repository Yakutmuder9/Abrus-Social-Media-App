import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import postReducer from "../redux/features/post/postSlice";
import filterReducer from "../redux/features/post/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    filter: filterReducer,
  },
});
