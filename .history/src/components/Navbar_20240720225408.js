// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ''

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
                        <div class="input-group">
                            <div class="form-outline" data-mdb-input-init>
                                <input type="search" id="form1" class="form-control" />
                                <label class="form-label" for="form1">Search</label>
                            </div>
                            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
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
