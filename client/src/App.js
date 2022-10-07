import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/login';
import ProfileScreen from './screen/profile/profileScreen';
import HomeScreen from './screen/home/homeScreen';
import MainPost from './screen/home/mainPost';
import Watch from './screen/watch/watch';
import Marketplace from './screen/marketplace/marketplace';
import Group from './screen/group/group';
import Pages from './screen/pages/pages';

import PrivateRoute from "./components/routing/PrivateRoute";
import LoginScreen from "./components/login/LoginScreen";
import RegisterScreen from "./components/login/RegisterScreen";
import ForgotPasswordScreen from "./components/login/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/login/ResetPasswordScreen";

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
        <Route path="passwordreset/:resetToken" element={<ResetPasswordScreen />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomeScreen />}>
            <Route path="user" element={<MainPost />} />
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

{/* <Routes>
<Route path="login" element={<Login />} />

<Route path="/" element={<HomeScreen />}>
  <Route path="user" element={<MainPost />} />
  <Route path="profile/:id" element={<ProfileScreen />} />
  <Route path="menu" element={<ProfileScreen />} />
  <Route path="watch" element={<Watch />} />
  <Route path="marketplace" element={<Marketplace />} />
  <Route path="group" element={<Group />} />
  <Route path="group/:id" element={<Group />} />
  <Route path="shortcuts" element={<ProfileScreen />} />
  <Route path="pages" element={<Pages />} />
</Route> 
</Routes>*/}