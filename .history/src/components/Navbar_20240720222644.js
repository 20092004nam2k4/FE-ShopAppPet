// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                                    <path d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path>
                                </svg>
                            </span>
                            <span className="category-text">
                                <span>Danh mục</span>
                                <span>Sản phẩm</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="search-consult-group">
                    <div className="">
                        <form className="search-form">
                            <input className="search-input" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                        </form>
                    </div>
                    <div className="consultation">
                        <button className="consult-btn">Tư vấn trả góp</button>
                        <div className="image-container">
                            <img src={require('../assets/images/image1.jpg')} alt="Advisor" className="circle-img" />
                            <img src={require('../assets/images/image2.jpg')} alt="Advisor" className="circle-img" />
                            <img src={require('../assets/images/image3.jpg')} alt="Advisor" className="circle-img" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
