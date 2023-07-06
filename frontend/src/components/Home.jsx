import React from "react";
import HomeBG from "../assets/image-removebg-preview 1.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-section">
      <div className="left-section">
        <h1>Pocket Notes</h1>
        <button> + Create New Group</button>
      </div>
      <div className="right-section">
        <img src={HomeBG} alt="" />
        <div className="text-section">
          <div>
            <p>Pocket notes</p>
          </div>
          <div>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
