import "./App.scss";
import { Routes, Route } from "react-router-dom";
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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

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
