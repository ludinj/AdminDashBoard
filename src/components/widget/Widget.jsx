import React from "react";
import "./widget.scss";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineUser, AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
const Widget = ({ type }) => {
  let data;
  //temporary
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMony: false,
        link: "See all user",
        icon: (
          <AiOutlineUser
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMony: false,
        link: "See all orders",
        icon: (
          <AiOutlineShoppingCart
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMony: true,
        link: "View net earnings",
        icon: (
          <AiFillDollarCircle
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMony: true,
        link: "See details",
        icon: (
          <FaBalanceScale
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMony && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <MdOutlineKeyboardArrowUp />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
