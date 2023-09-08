import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img className="icon" src="/search.svg" alt="icon" />
        <img className="icon" src="/app.svg" alt="icon" />
        <img className="icon" src="/expand.svg" alt="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="icon" />
          <span>1</span>
        </div>
        <div className="user">
         <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="icon" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
