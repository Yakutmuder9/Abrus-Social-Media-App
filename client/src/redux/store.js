import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../redux/features/auth/authSlice";
import postReducer from "../redux/features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
