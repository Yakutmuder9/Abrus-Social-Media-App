import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  message: "",
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
    },
    SET_USER(state, action) {
      state.user = ("get", action.payload)
      console.log('action',   state.user)

    },
  }
});
export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export const authReducer = authSlice.reducer;
