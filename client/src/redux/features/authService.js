import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};


// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('authToken', JSON.stringify(response.data))
  }

  return response.data
}

// const login = (email, password) => {
//   return axios
//     .post(API_URL + "login", {
//       email,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("authToken", JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// };

const logout = () => {
  localStorage.removeItem("authToken");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;