import React, { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/umai_sushi_logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false); 
  const navigate = useNavigate(); // Initialize useNavigate

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click)
  }

  // const handleOrderNowClick = () => {
  //   window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=1d93676d-8788-45ab-b626-108e905f7528', '_blank'); // Replace with your external link
  // };

  return (
    <div className={color ? "header header-bg" : 'header'}>
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/delivery">
                Delivery
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            {/* <li onClick={handleOrderNowClick}>
              <button>Order now</button>
            </li> */}

            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/order">
                <button>Order now</button>
              </NavLink>
            </li>

            
          </ul>

          {/* hello */}

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: '#fff' }} />
            ) : (
              <FaBars size={20} style={{ color: '#fff' }} /> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;