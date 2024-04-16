import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import DashLayout from "./pages/home/DashLayout";
import MainPost from "./pages/home/MainPost";
import Watch from "./pages/watch";
import Marketplace from "./pages/Marketplace";
import Group from "./pages/Group";
import Notification from "./pages/Notification";
import Pages from "./pages/page/page";

import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ResetPasswordPage from "./pages/auth/ResetPassword";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import Prefetch from "./features/auth/Prefetch";

const App = () => {
  return (
    <div className="App">
      {/* <ToastContainer /> */}

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage />} />
        <Route
          path="resetpassword/:resetToken"
          element={<ResetPasswordPage />}
        />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<Prefetch />}>
              <Route path="/" element={<DashLayout />}>
                <Route index element={<MainPost />} />
                <Route path="profile/:id" element={<ProfilePage />} />
                <Route path="menu" element={<ProfilePage />} />
                <Route path="watch" element={<Watch />} />
                <Route path="marketplace" element={<Marketplace />} />
                <Route path="groups" element={<Group />} />
                <Route path="group/:id" element={<Group />} />
                <Route path="shortcuts" element={<ProfilePage />} />
                <Route path="notification" element={<Notification />} />
                <Route path="pages" element={<Pages />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
