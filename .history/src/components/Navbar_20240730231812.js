import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ itemCount = 0 }) => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo-category-group">
                    <div className="logo">
                        <a href="#">
                            <img src="logo-url" alt="Logo" className="navbar-logo" />
                        </a>
                    </div>
                    <div className="category-icon">
                        <button className="category-button">
                            <img src="category-icon-url" alt="Category" className="category-icon-svg" />
                            Category
                        </button>
                    </div>
                </div>
                <div className="search-consult-group">
                    <form className="search-form">
                        <div className="input-group">
                            <input type="text" className="form-control search-input" placeholder="Search" />
                            <button className="btn">Search</button>
                        </div>
                    </form>
                    <div className="consultation">
                        <button className="consult-btn">Consultation</button>
                    </div>
                </div>
                <div className="cart-icon-container">
                    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                    {itemCount > 0 && (
                        <div className="cart-text">
                            <span className="cart-count">{itemCount}</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
