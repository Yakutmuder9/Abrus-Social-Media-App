import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile/profilePage";
import HomePage from "./pages/home/homePage";
import MainPost from "./pages/home/mainPost";
import Watch from "./pages/watch/watch";
import Marketplace from "./pages/marketplace/marketplace";
import Group from "./pages/group/group";
import Pages from "./pages/page/page";

import PrivateRoute from "./components/routing/PrivateRoute";
import LoginPage from "./components/login/Login";
import RegisterPage from "./components/login/Register";
import ForgotPasswordPage from "./components/login/ForgotPassword";
import ResetPasswordPage from "./components/login/ResetPassword";

import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { getLoginStatus } from "./redux/features/auth/authService";

axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage />} />
        <Route
          path="resetpassword/:resetToken"
          element={<ResetPasswordPage />}
        />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<MainPost />} />
            <Route path="/home" element={<MainPost />} />
            <Route path="profile/:id" element={<ProfilePage />} />
            <Route path="menu" element={<ProfilePage />} />
            <Route path="watch" element={<Watch />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="groups" element={<Group />} />
            <Route path="group/:id" element={<Group />} />
            <Route path="shortcuts" element={<ProfilePage />} />
            <Route path="notification" element={<ProfilePage />} />
            <Route path="pages" element={<Pages />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

//  <Routes>
// <Route path="login" element={<Login />} />

// <Route path="/" element={<HomePage />}>
//   <Route path="user" element={<MainPost />} />
//   <Route path="profile/:id" element={<ProfilePage />} />
//   <Route path="menu" element={<ProfilePage />} />
//   <Route path="watch" element={<Watch />} />
//   <Route path="marketplace" element={<Marketplace />} />
//   <Route path="group" element={<Group />} />
//   <Route path="group/:id" element={<Group />} />
//   <Route path="shortcuts" element={<ProfilePage />} />
//   <Route path="pages" element={<Pages />} />
// </Route>
// </Routes>
