import React, { useContext } from "react";

import "./navbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaRegMoon, FaListUl } from "react-icons/fa";
import { BiExitFullscreen } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className="items">
          <div className="item">
            <BsGlobe className="icon" />
            English
          </div>
          <div className="item">
            <FaRegMoon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <BiExitFullscreen className="icon" />
          </div>
          <div className="item">
            <IoMdNotificationsOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FiMessageSquare className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FaListUl className="icon" />
          </div>
          <div className="item">
            <img
              className="avatar"
              alt=""
              src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
