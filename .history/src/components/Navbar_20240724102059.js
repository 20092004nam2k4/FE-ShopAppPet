import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [showIcons, setShowIcons] = useState(false);

    const toggleIcons = () => {
        setShowIcons(!showIcons);
    };

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
                        <button className="category-button" onClick={toggleIcons}>
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
                        <button className="consult-btn">Tư vấn trả góp</button>
                        <div className="image-container">
                            <img src={require('../assets/images/image1.jpg')} alt="Advisor" className="circle-img" />
                            <img src={require('../assets/images/image2.jpg')} alt="Advisor" className="circle-img" />
                            <img src={require('../assets/images/image3.jpg')} alt="Advisor" className="circle-img" />
                        </div>
                    </div>
                </div>
            </div>
            {showIcons && (
                <div className="col-md-3 d-flex flex-column">
                    <div className="button-container">
                        <a href="https://azpet.com.vn/cho-canh/" className="banner-button">
                            <span className="icon-pet">
                                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt="Icon 1" className="banner-icon" />
                            </span>
                            <span className="banner-icon-title">Giống Chó Cảnh</span>
                        </a>
                        <a href="https://azpet.com.vn/meo-canh/" className="banner-button">
                            <span className="icon-pet">
                                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png" alt="Icon 2" className="banner-icon" />
                            </span>
                            <span className="banner-icon-title">Mèo Cảnh</span>
                        </a>
                        <a href="https://hoptac.azpet.com.vn/" className="banner-button">
                            <span className="icon-pet">
                                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png" alt="Icon 3" className="banner-icon" />
                            </span>
                            <span className="banner-icon-title">Hợp Tác Nhân Giống</span>
                        </a>
                        <a href="https://azpet.com.vn/" className="banner-button">
                            <span className="icon-pet">
                                <img src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png" alt="Icon 4" className="banner-icon" />
                            </span>
                            <span className="banner-icon-title">Phụ Kiện Chó Mèo</span>
                        </a>
                        <a href="https://azpet.com.vn/spa/" className="banner-button">
                            <span className="icon-pet">
                                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png" alt="Icon 5" className="banner-icon" />
                            </span>
                            <span className="banner-icon-title">Spa & Grooming</span>
                        </a>
                    </div>
                </div>
            )}
            <div className={`submenu ${showIcons ? 'show' : ''}`}>
               
        </nav>
    );
};

export default Navbar;
