
import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="logo1">
          <Link to="/" className="link">
            <span className="logo">Home</span>
          </Link>
        </div>
        <div className="navbarRight">
          <div className="navContainer">
            <div className='item'><Link to="/users" className="link"><span className='item'>Customers</span> </Link></div>
            <div className='item'>Contact</div>
            <div className='item'>Help</div>
          </div>
        </div>
      </div>
    </div>
      );
}
