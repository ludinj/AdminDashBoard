import React, { useContext } from "react";
import "./sidebar.scss";
// import DashboardIcon from '@mui/icons-material/Dashboard';
import { RiDashboardFill, RiTruckFill } from "react-icons/ri";
import { AiOutlineUser, AiFillShop } from "react-icons/ai";
import { IoStatsChart, IoNotifications, IoLogOutSharp } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdPsychology, MdSettingsSystemDaydream } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">LJ logo</span>
        </Link>
      </div>
      <hr style={{ color: "grey" }} />
      <div className="center">
        <ul className="">
          <p className="title">MAIN</p>
          <li className="">
            <RiDashboardFill className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li className="">
              <AiOutlineUser className="icon" />
              <span>User</span>
            </li>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li className="">
              <AiFillShop className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li className="">
            <BsCreditCardFill className="icon" />
            <span>Orders</span>
          </li>
          <li className="">
            <RiTruckFill className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li className="">
            <IoStatsChart className="icon" />
            <span> Stats</span>
          </li>
          <li className="">
            <IoNotifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li className="">
            <MdSettingsSystemDaydream className="icon" />
            <span>System health</span>
          </li>
          <li className="">
            <MdPsychology className="icon" />
            <span>Logs</span>
          </li>
          <li className="">
            <FaCog className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li className="">
            <ImProfile className="icon" />
            <span>Profile</span>
          </li>
          <li className="">
            <IoLogOutSharp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
