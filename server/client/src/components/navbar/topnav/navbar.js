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
       
        <Avatar className='text-dark'>
          <FaFacebookMessenger />
        </Avatar>
        <Avatar className='mx-2 text-dark'>
          <FaBell />
        </Avatar>
        <Avatar src="https://i0.wp.com/www.howtomob.com/wp-content/uploads/2022/07/whatsapp-dp-for-boys-.jpg?ssl=1&resize=512%2C512" className='text-dark'/>
        
        </div>
    </div>
  )
}

export default Navbar
