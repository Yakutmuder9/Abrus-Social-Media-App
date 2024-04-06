import "./App.scss";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      App
      <Routes>
        {/* <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
        <Route
          path="resetpassword/:resetToken"
          element={<ResetPasswordScreen />}
        /> */}

        {/* <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomeScreen />}>
            <Route path="" element={<MainPost />} />
            <Route path="/home" element={<MainPost />} />
            <Route path="profile/:id" element={<ProfileScreen />} />
            <Route path="menu" element={<ProfileScreen />} />
            <Route path="watch" element={<Watch />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="groups" element={<Group />} />
            <Route path="group/:id" element={<Group />} />
            <Route path="shortcuts" element={<ProfileScreen />} />
            <Route path="notification" element={<ProfileScreen />} />
            <Route path="pages" element={<Pages />} />
          </Route>
        </Route> */}
      </Routes>
    </div>
  );
};

export default App;
