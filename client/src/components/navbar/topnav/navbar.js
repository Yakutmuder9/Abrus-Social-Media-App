import '../navbar.css';
import {FaFacebookMessenger, FaBell, FaUserCircle} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="top-nav-bar  d-flex justify-content-between align-items-center px-4 py-2 sticky-top">
      <div><h4 className='text-primary '>Merabook</h4></div>
      <div className='nav-search'>
        <input placeholder='Search Merabook' className='py-1 px-3  d-none d-md-block'/>
      </div>

      <div className='d-flex'>
        <div className='rounded-circle text-center px-2 py-1 bg-secondary'>
        <FaFacebookMessenger />
        </div>
        <div className='rounded-circle text-center px-2 py-1 bg-secondary mx-2' >
        <FaBell />
        </div>
        <div className='rounded-circle text-center px-2 py-1 bg-secondary' >
        <FaUserCircle />
        </div>
        </div>
    </div>
  )
}

export default Navbar
