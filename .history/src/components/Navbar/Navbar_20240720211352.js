import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-red">
            <div className="navbar-content">
                <div className="category-button-group">
                    <button className="category-button">
                        <span className="category-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                                <path d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path>
                            </svg>
                        </span>
                        <span className="category-title">Danh mục sản phẩm</span>
                    </button>
                </div>
                <div className="logo-group">
                    <a className="navbar-brand" href="#">
                        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
                    </a>
                </div>
            </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-content">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="category-icon.png" alt="Product Categories" className="category-icon" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <form className="form-inline">
                                    <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </li>
                            <li className="nav-item">
                                <button className="btn consult-btn">Consultation</button>
                                <div className="image-container">
                                    <img src="image1.jpg" alt="Advisor" className="circle-img" />
                                    <img src="image2.jpg" alt="Advisor" className="circle-img" />
                                    <img src="image3.jpg" alt="Advisor" className="circle-img" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
