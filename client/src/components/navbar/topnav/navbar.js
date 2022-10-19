import '../navbar.css';
import { useEffect, useState } from "react";
import { FaFacebookMessenger, FaBell, FaVideo } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import {  useDispatch } from 'react-redux';
import { SET_USER, SET_NAME } from "../../../redux/features/auth/authSlice";
import { getUser } from "../../../redux/features/auth/authService";
import Loader from '../../loading/Loading';
import { AiFillHome, AiTwotoneFlag, AiTwotoneShop } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { MdGroups } from 'react-icons/md';

const Navbar = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      // console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.firstName));
    }
    getUserData();
  }, [dispatch]);


  return (
    <div className="top-nav-bar  d-flex justify-content-between align-items-center px-4 py-2 sticky-top">
      {isLoading ? <Loader /> : <></>}
      <div className='logo-name ps-2'>
        <h2 className='text-primary d-none d-md-block' >Winabook</h2>
      </div>
      <div className='nav-search'>
        <input placeholder='Search Merabook' className='py-1 px-3  d-none d-md-block' />
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 d-flex d-md-none mobile-size-nav">
        <NavLink to='/home' className='menu-link '><span className='w-100'><AiFillHome /></span></NavLink>
        <span><NavLink to='/watch' className='menu-link '><FaVideo /></NavLink></span>
        <span><NavLink to='/marketplace' className='menu-link '><AiTwotoneShop /></NavLink></span>
        <span><NavLink to='/groups' className='menu-link '><MdGroups /></NavLink></span>
        <span><NavLink to='/notification' className='menu-link '><FaBell /></NavLink></span>
        <span className='mobile_ava'><NavLink to={'/profile/' + profile?.firstName + '.' + profile?.lastName} className='menu-link '><Avatar src={profile?.profile_pic} className='text-dark moblie-avator' /></NavLink></span>
      </div>
      <div className='d-none d-md-flex'>

        <Avatar className='text-dark'>
          <FaFacebookMessenger />
        </Avatar>
        <Avatar className='mx-2 text-dark'>
         <NavLink to='notification'><FaBell /></NavLink> 
        </Avatar>
        <a href={'/profile/' + profile?.firstName + '.' + profile?.lastName}><Avatar src={profile?.profile_pic} className='text-dark' /></a>

      </div>
    </div>
  )
}

export default Navbar
