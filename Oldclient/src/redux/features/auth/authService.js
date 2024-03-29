import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL ='http://localhost:5000'
// const BACKEND_URL ='https://wina-social-app.herokuapp.com'
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/auth/register`, userData,
      { withCredentials: true });

    if (response.statusText === "OK") {
      toast.success("User Registered successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error('message');
  }
};

// Login User
export const loginUser = async (userData) => {
 
  
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/auth/login`,
      userData
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error( message);
  }

  // try {
  //   const response = await fetch(
  //     `${BACKEND_URL}/api/auth/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(userData)
  //   }
  //   );

  //   if (response.status === 200) {
  //     let data = await response.json();
     
  //     return data
  //   }
  //   // if (response.statusText === "OK") {
  //   //   toast.success("Login Successful...");
  //   //    console.log(response.data)
  //   // }
  //   // return response.data;
  // } catch (error) {
  //   const message =
  //     (error.response && error.response.data && error.response.data.message) ||
  //     error.message ||
  //     error.toString();
  //   toast.error(message);
  // }
};

// Logout User
export const logoutUser = async () => {
  try {
    await fetch(`${BACKEND_URL}/api/auth/logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(
      `/api/auth/forgotpassword`,
      userData
    );
    toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Reset Password
export const resetPassword = async (userData, resetToken) => {
  try {
    const response = await axios.put(
      `/api/auth/resetpassword/${resetToken}`,
      userData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/auth/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Get User Profile
export const getUser = async () => {
  try {
    const response = await fetch(`/api/private/getuserdata`);
    if (response.status === 200) {
      let data = await response.json();
      return data
    }
    // return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Update Profile
export const updateUser = async (formData) => {
  try {
    const response = await axios.patch(
      `/api/private/updateuserdata`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Update Profile
export const changePassword = async (formData) => {
  try {
    const response = await axios.patch(
      `/api/auth/changepassword`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
