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
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
                        </a>
                    </div>
                    <div className="category-icon">
                        <button className="category-button">
                            <span className="category-icon-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="36" height="36">
                                    <path fill="white" d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path>
                                </svg>
                            </span>
                            <span className="category-text">
                                <ul className="no-bullets">
                                    <li>Danh Mục</li>
                                    <li>Sản Phẩm</li>
                                </ul>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="search-consult-group">
                    <div className="form-search">
                        <div className="input-group">
                            <input
                                type="search"
                                className="form-control search-input"
                                placeholder="Tìm thú cưng của bạn"
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="consultation">
                        <div className="cart-icon-container">
                            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                            <div className="cart-text ">
                                <span cla>Giỏ hàng</span>
                                <span className="cart-count">{itemCount} sản phẩm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
