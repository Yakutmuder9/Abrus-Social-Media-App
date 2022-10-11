import Leftnav from "../../components/navbar/leftnav/leftnav"
import Navbar from "../../components/navbar/topnav/navbar"
import Rightnav from "../../components/navbar/rightnav/rightnav"
import MainPost from "./mainPost"
import './home.css'
import {  Outlet } from "react-router-dom";

const HomeScreen = () => {

  return (
    <div style={{bacground:"#f0f2f5"}}>
      <Navbar />
      <div className="main-container d-flex justify-content-center">
        <div className="left-side-nav d-block pt-2">
          <Leftnav />
        </div>
        <div className="middle-post-nav p-2  overflow-hidden">
         <Outlet /> 
        </div>
        <div className="right-active-nav d-none d-xl-block pt-2" >
          <Rightnav />
        </div>
      </div>
    </div>

  )
}

export default HomeScreen
