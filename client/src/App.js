import './App.css';
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import ProfileScreen from './screen/profile/profileScreen';
import HomeScreen from './screen/home/homeScreen';
import MainPost from './screen/home/mainPost';
import Watch from './screen/watch/watch';
import Marketplace from './screen/marketplace/marketplace';
import Group from './screen/group/group';
import Pages from './screen/pages/pages';

import PrivateRoute from "./components/routing/PrivateRoute";
import LoginScreen from "./components/login/Login";
import RegisterScreen from "./components/login/Register";
import ForgotPasswordScreen from "./components/login/ForgotPassword";
import ResetPasswordScreen from "./components/login/ResetPassword";


import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./components/services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";

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
    <div className='App'>
      <ToastContainer />
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
        <Route path="passwordreset/:resetToken" element={<ResetPasswordScreen />} />

        <Route element={<PrivateRoute />}>
          
          <Route path="/" element={<HomeScreen />}>
            <Route path="" element={<MainPost />} />
            <Route path="profile/:id" element={<ProfileScreen />} />
            <Route path="menu" element={<ProfileScreen />} />
            <Route path="watch" element={<Watch />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="group" element={<Group />} />
            <Route path="group/:id" element={<Group />} />
            <Route path="shortcuts" element={<ProfileScreen />} />
            <Route path="pages" element={<Pages />} />
          </Route>
        </Route>


      </Routes>
    </div>

  );
}

export default App;


//  <Routes>
// <Route path="login" element={<Login />} />

// <Route path="/" element={<HomeScreen />}>
//   <Route path="user" element={<MainPost />} />
//   <Route path="profile/:id" element={<ProfileScreen />} />
//   <Route path="menu" element={<ProfileScreen />} />
//   <Route path="watch" element={<Watch />} />
//   <Route path="marketplace" element={<Marketplace />} />
//   <Route path="group" element={<Group />} />
//   <Route path="group/:id" element={<Group />} />
//   <Route path="shortcuts" element={<ProfileScreen />} />
//   <Route path="pages" element={<Pages />} />
// </Route> 
// </Routes>