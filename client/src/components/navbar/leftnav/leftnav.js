import { AiFillHome, AiTwotoneShop } from 'react-icons/ai'
import { MdGroups } from 'react-icons/md'
import { FaUserAlt, FaVideo } from 'react-icons/fa'
import { CgMenuGridO } from 'react-icons/cg'
import '../navbar.css';
import { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {  NavLink } from "react-router-dom";

const Leftnav = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);


    return (
        <div className="left-nav-bar bg-light">
            <div className='d-none d-md-block d-xl-none'>
                <aside className="navbar-aside" id='nav-collaps-con'>
                <nav>
                    <ul className="menu-aside p-0 w-100" id="sideNavBtn">
                        <li className="menu-item 0">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="#"
                            >
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/profile"
                            >
                                <FaUserAlt />
                            </NavLink>
                        </li>

                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="#"
                            >
                                <CgMenuGridO />
                            </NavLink>
                        </li>


                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/event"
                            >
                                <FaVideo />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/assessment"
                            >
                                <AiTwotoneShop />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/resources"
                            >
                                <MdGroups />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/inbox"
                            >
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/profile"
                            >
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/support"
                            >
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/shortcuts"
                            >
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/page"
                            >
                                <AiFillHome />
                            </NavLink>
                        </li>
                       
                    </ul>
                    <br />
                    <br />
                </nav>
                </aside> 
            </div>

            <div className='left-open-menu d-none d-xl-block'>
                <aside className="navbar-aside ">
                <nav>
                    <ul className="menu-aside  w-100" id="sideNavBtn">
                        <li className="menu-item">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="#"
                            >
                              <AiFillHome /> Home
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/profile"
                            >
                                <FaUserAlt /> Yakut Muder
                            </NavLink>
                        </li>

                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/course"
                            >
                                <CgMenuGridO /> Menu
                            </NavLink>
                        </li>


                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/event"
                            >
                                <FaVideo /> Watch
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/assessment"
                            >
                                <AiTwotoneShop /> Marketplace
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/resources"
                            >
                                <MdGroups /> Group
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/inbox"
                            >
                                <AiFillHome /> Billal Media
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/profile"
                            >
                                <AiFillHome /> Js group
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/support"
                            >
                                <AiFillHome /> Gurange Mhaber
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/shortcuts"
                            >
                                <AiFillHome /> Shortcuts
                            </NavLink>
                        </li>
                        <li className="menu-item ">
                            <NavLink
                                className="menu-link d-flex align-items-center"
                                to="/page"
                            >
                                <AiFillHome /> Pages
                            </NavLink>
                        </li>
                       
                    </ul>
                    <br />
                    <br />
                </nav>
            </aside> 
            </div>
        </div>
    )
}

export default Leftnav


