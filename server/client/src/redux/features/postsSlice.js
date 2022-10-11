import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchposts = createAsyncThunk(
  "post/fetchposts",
  async () => {
    const { data } = await axios.get(`post`)
    return data
    // let response = await fetch('https://furniture-shop-backend.herokuapp.com/post');
    // if (response.status === 200) {
    //   let data = await response.json();
    //   return data
    // }
  }
);

const postsSlice = createSlice({
  name: "post",
  initialState: { isLoading: true, errMess: null, postsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchposts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchposts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.postsArray = action.payload;
    },
    [fetchposts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const postsReducer = postsSlice.reducer;

