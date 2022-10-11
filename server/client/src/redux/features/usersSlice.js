import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../authService";

const user = JSON.parse(localStorage.getItem("authToken"));

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchusers = createAsyncThunk(
//   "user/fetchusers",
//   async () => {
//     const { data } = await axios.get(`users/me`)
//     return data
    
//     // let response = await fetch('https://furniture-shop-backend.herokuapp.com/user');
//     // if (response.status === 200) {
//     //   let data = await response.json();
//     //   return data
//     // }
//   }
// );

// const usersSlice = createSlice({
//   name: "user",
//   initialState: { isLoading: true, errMess: null, usersArray: [] },
//   reducers: {},
//   extraReducers: {
//     [fetchusers.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchusers.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.errMess = null;
//       state.usersArray = action.payload;
//     },
//     [fetchusers.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.errMess = action.error ? action.error.message : "Fetch failed";
//     },
//   },
// });

// export const usersReducer = usersSlice.reducer;