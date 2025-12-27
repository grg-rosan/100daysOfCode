import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';

const NavBar = () => {
  return (
    <div className='nav-bar flex'>
      <div className="logo">
        The Pasal
      </div>

      <div className="features flex">
        <div className="search-box">
          <input type="text" placeholder='Search your items'/>
        </div>

        <div className="links flex">
        <li>Cart</li>
        <Link to="home"><li>Home</li></Link>
        <Link to="about"><li>About</li></Link>
        <Link to="contacts"><li>Contacts</li></Link>
        </div>
      </div>

    </div>
  )
}

export default NavBar