import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/normalChart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import "./singleStyle.scss";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jhon Dooe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">ludinjb@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">+584246427380</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemKey">Calle 5 Zulia sanfrancisco</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">Venezuela</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={2.7 / 1}
              title="User transactions for the last 6 months"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transantions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
