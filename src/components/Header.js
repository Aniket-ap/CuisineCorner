import React from "react";
import Logo from "../assets/image/vectorstock_33649353.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <img className="logo" src={Logo} alt="logo" />
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
