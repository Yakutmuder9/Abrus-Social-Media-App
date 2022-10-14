import { createSlice } from "@reduxjs/toolkit";

const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
  isLoggedIn: false,
  name:  "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    profile_pic: "",
    dateOfBirth: "",
    hobbies: "",
    relationShip: "",
    featured: "",
    status: "",
    gender: "",
    friends_count: "",
    education: "",
    location: "",
    friends: "",
    education: "",
    noFriend: ""
  },
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
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.firstName = profile.firstName;
      state.user.lastName = profile.lastName;
      state.user.email = profile.email;
      state.user.profile_pic = profile.profile_pic;
      state.user.dateOfBirth = profile.dateOfBirth;
      state.user.hobbies = profile.hobbies;
      state.user.relationShip = profile.relationShip;
      state.user.featured = profile.featured;
      state.user.status = profile.status;
      state.user.gender = profile.gender;
      state.user.friends_count = profile.friends_count;
      state.user.education = profile.education;
      state.user.location = profile.location;
      state.user.friends = profile.friends;
      state.user.education = profile.education;
      state.user.noFriend = profile.noFriend;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
