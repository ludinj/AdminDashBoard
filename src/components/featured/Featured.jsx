import React from "react";
import "./featured.scss";
import { FiMoreVertical } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="tittle">Total Revenue</h1>
        <FiMoreVertical />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title">Totals sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <MdOutlineKeyboardArrowUp fontSize="20px" />
              <div className="resultAmount">$12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <MdOutlineKeyboardArrowDown fontSize="20px" />
              <div className="resultAmount">$12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Month</div>
            <div className="itemResult">
              <MdOutlineKeyboardArrowUp fontSize="20px" />
              <div className="resultAmount">$12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
