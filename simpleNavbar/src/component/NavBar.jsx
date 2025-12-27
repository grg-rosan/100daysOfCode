import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar flex">
      <div className="logo">The Pasal</div>

      <div className="features flex">
        <div className="search-box">
          <input type="text" placeholder="Search your items" />
        </div>

        <div className="links flex">
          <NavLink to="/" end className="nav-link">
            <li>Home</li>
          </NavLink>
          <NavLink to="cart"  className="nav-link">
            <li>Cart</li>
          </NavLink>
          <NavLink to="about"  className="nav-link">
            <li>About</li>
          </NavLink>
          <NavLink to="contacts"  className="nav-link">
            <li>Contacts</li>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
