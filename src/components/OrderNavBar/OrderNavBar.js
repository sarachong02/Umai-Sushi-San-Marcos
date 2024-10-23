import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./OrderNavBar.css";

import logo from "../../assets/umai_sushi_logo.png";
import cart from "../../assets/shopping_cart_icon.svg";
import search from "../../assets/search.svg";


const OrderNavbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false); 

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className={color ? "header header-bg" : 'header'}>
            <div className="container">
                <div className="navbar-menu">
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
                            <NavLink className="nav-link" to="/order">
                                Order
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
                        
                     </ul>

                     <div className='navbar-right'>
                        <img src={search} alt='search-icon' />
                        <div className='navbar-search-icon'>
                            <img src={cart} alt='cart-icon' />
                            <div className = 'dot'></div>
                        </div>
                     </div>


          {/* <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: '#fff' }} />
            ) : (
              <FaBars size={20} style={{ color: '#fff' }} /> 
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderNavbar;
