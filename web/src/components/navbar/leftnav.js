import { useState, useEffect } from "react";
import { AiFillHome, AiTwotoneShop, AiTwotoneFlag } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { FaUserAlt, FaVideo } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import "../../styles/components/navbar.css";
// import "react-pro-sidebar/dist/css/styles.css";
import { NavLink, Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authService";
import { getUser } from "../../features/auth/authService";
import Loader from "../loading/Loading";

const Leftnav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    await logoutUser();
    //   dispatch(SET_LOGIN(false));
    localStorage.removeItem("name");
    navigate("/login");
  };
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   async function getUserData() {
  //     const data = await getUser();
  //     // console.log(data);

  //     setProfile(data);
  //     setIsLoading(false);
  //     await dispatch(SET_USER(data));
  //     await dispatch(SET_NAME(data.name));
  //   }
  //   getUserData();
  // }, [dispatch]);

  return (
    <div className="left-nav-bar">
      <div
        className="d-none d-md-block pt-5 d-xl-none"
        style={{ background: "#ffffff", marginTop: "-50px" }}
      >
        <aside className="navbar-aside " id="nav-collaps-con">
          <nav>
            <ul className="menu-aside p-0 w-100" id="sideNavBtn">
              <li className="menu-item 0">
                <Link className="menu-link d-flex align-items-center" to="/">
                  <AiFillHome />
                </Link>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  id="profile-name"
                  to={"profile/" + profile?.firstName + "." + profile?.lastName}
                >
                  <FaUserAlt />
                </NavLink>
              </li>

              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/menu"
                >
                  <CgMenuGridO />
                </NavLink>
              </li>

              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/watch"
                >
                  <FaVideo />
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/marketplace"
                >
                  <AiTwotoneShop />
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/groups"
                >
                  <MdGroups />
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/group/1"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V3C3qx89X6hSQZUNhi0QDhNWki6gD6B7Qg&usqp=CAU"
                    className="rounded-circle bg-secondary"
                    alt=""
                    style={{
                      height: "37px",
                      width: "37px",
                      marginLeft: "-10px",
                    }}
                  />
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/group/2"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSQ8yS1dmcoeApLMDdWOfoYlBxDnl1LY3rQ&usqp=CAU"
                    className="rounded-circle bg-secondary"
                    alt=""
                    style={{
                      height: "37px",
                      width: "37px",
                      marginLeft: "-10px",
                    }}
                  />
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/group/3"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrURzysGidjCA4aOFFAsZW6e5Weami4AUvg&usqp=CAU"
                    className="rounded-circle bg-secondary"
                    alt=""
                    style={{
                      height: "37px",
                      width: "37px",
                      marginLeft: "-10px",
                    }}
                  />
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
                  to="/pages"
                >
                  <AiTwotoneFlag />
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/login"
                  onClick={logOut}
                >
                  <LogoutIcon />
                </NavLink>
              </li>
            </ul>
            <br />
            <br />
          </nav>
        </aside>
      </div>

      <div className="left-open-menu d-none d-xl-block">
        <aside className="navbar-aside ">
          <nav>
            <ul className="menu-aside  w-100" id="sideNavBtn">
              <li className="menu-item">
                <Link className="menu-link d-flex align-items-center" to="/">
                  <AiFillHome /> Home
                </Link>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center profile-name"
                  to={"profile/" + profile?.firstName + "." + profile?.lastName}
                >
                  <FaUserAlt />
                  <div className="d-flex">
                    <span className="profile-name pe-1">
                      {profile?.firstName}{" "}
                    </span>
                    <span className="profile-name">{profile?.lastName}</span>
                  </div>
                </NavLink>
              </li>

              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/menu"
                >
                  <CgMenuGridO /> Menu
                </NavLink>
              </li>

              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/watch"
                >
                  <FaVideo /> Watch
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/marketplace"
                >
                  <AiTwotoneShop /> Marketplace
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/groups"
                >
                  <MdGroups /> Group
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/group/1"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V3C3qx89X6hSQZUNhi0QDhNWki6gD6B7Qg&usqp=CAU"
                    className="rounded-circle bg-secondary me-1"
                    alt=""
                    style={{
                      height: "37px",
                      width: "37px",
                      marginLeft: "-10px",
                    }}
                  />{" "}
                  Billal Media
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/group/2"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSQ8yS1dmcoeApLMDdWOfoYlBxDnl1LY3rQ&usqp=CAU"
                    className="rounded-circle bg-secondary me-1"
                    alt=""
                    style={{
                      height: "37px",
                      width: "37px",
                      marginLeft: "-10px",
                    }}
                  />{" "}
                  Js group
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/group/3"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrURzysGidjCA4aOFFAsZW6e5Weami4AUvg&usqp=CAU"
                    className="rounded-circle bg-secondary me-1"
                    alt=""
                    style={{
                      height: "37px",
                      width: "37px",
                      marginLeft: "-10px",
                    }}
                  />{" "}
                  Gurange Mhaber
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
                  to="/pages"
                >
                  <AiTwotoneFlag /> Pages
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  className="menu-link d-flex align-items-center"
                  to="/login"
                  onClick={logOut}
                >
                  <LogoutIcon /> Log Out
                </NavLink>
              </li>
            </ul>
            <br />
            <br />
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Leftnav;
