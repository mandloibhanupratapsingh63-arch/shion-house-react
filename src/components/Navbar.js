import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Shionhouse" />
                </Link>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search products..." />
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>

            {/* Right Side Buttons */}
            <div className="nav-actions">
                <Link to="/signup" className="btn">SIGNUP</Link>
                <Link to="/login" className="btn">LOGIN</Link>
                <Link to="/cart" className="cart-icon">
                    <FiShoppingCart size={22} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
