import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredPosts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_POSTS(state, action) {
      const { posts, search } = action.payload;
      const tempPosts = posts.filter(
        (post) =>
          post.name.toLowerCase().includes(search.toLowerCase()) ||
          post.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredPosts = tempPosts;
    },
  },
});

export const { FILTER_POSTS } = filterSlice.actions;

export const selectFilteredPoducts = (state) => state.filter.filteredPosts;

export default filterSlice.reducer;
