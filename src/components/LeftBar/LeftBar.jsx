import React from "react";
import "./leftbar.css";
import Friends from '../../assets/1.png'

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
            //   src={currentUser.profilePic}
            //   alt=""
            />
            <span>Meta</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
