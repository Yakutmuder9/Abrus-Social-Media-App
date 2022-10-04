import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/login';
import ProfileScreen from './screen/profile/profileScreen';
import HomeScreen from './screen/home/homeScreen';


const App = () => {

  return (
    <div className='App'>
     <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="profile" element={<ProfileScreen />} />
    </Routes> 
    </div>
    
  );
}

export default App;
