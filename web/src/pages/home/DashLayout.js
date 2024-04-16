import Leftnav from "../../components/navbar/leftnav";
import Navbar from "../../components/navbar/navbar";
import Rightnav from "../../components/navbar/rightnav";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div style={{ bacground: "#f0f2f5" }}>
      <Navbar />
      <div className="main-container d-flex justify-content-center">
        <div className="left-side-nav d-block pt-2">
          <Leftnav />
        </div>
        <div className="middle-post-nav p-2  overflow-hidden">
          <Outlet />
        </div>
        <div className="right-active-nav d-none d-xl-block pt-2">
          <Rightnav />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
