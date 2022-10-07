import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchusers = createAsyncThunk(
  "user/fetchusers",
  async () => {
    const { data } = await axios.get(`users/me`)
    return data
    // let response = await fetch('https://furniture-shop-backend.herokuapp.com/user');
    // if (response.status === 200) {
    //   let data = await response.json();
    //   return data
    // }
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState: { isLoading: true, errMess: null, usersArray: [] },
  reducers: {},
  extraReducers: {
    [fetchusers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchusers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.usersArray = action.payload;
    },
    [fetchusers.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const usersReducer = usersSlice.reducer;