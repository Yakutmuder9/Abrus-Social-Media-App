import '../navbar.css';
import {FaFacebookMessenger, FaBell, FaUserCircle} from "react-icons/fa";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <div className="top-nav-bar  d-flex justify-content-between align-items-center px-4 py-2 sticky-top">
      <div><h4 className='text-primary '>Merabook</h4></div>
      <div className='nav-search'>
        <input placeholder='Search Merabook' className='py-1 px-3  d-none d-md-block'/>
      </div>

      <div className='d-flex'>
       
        <Avatar src="/broken-image.jpg" className='text-dark'>
          <FaFacebookMessenger />
        </Avatar>
        <Avatar src="/broken-image.jpg" className='mx-2 text-dark'>
          <FaBell />
        </Avatar>
        <Avatar src="/broken-image.jpg" className='text-dark'/>
        
        </div>
    </div>
  )
}

export default Navbar
