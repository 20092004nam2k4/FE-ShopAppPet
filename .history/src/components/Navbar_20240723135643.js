import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="side-image">
                    <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/header-free-ship.png" alt="Free Ship" className="side-img" />
                </div>
                <div className="logo">
                    <a href="#">
                        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
                    </a>
                </div>
                <div className="side-image">
                    <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/header-bh-365.png" alt="BH 365" className="side-img" />
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
        </nav>
    );
};

export default Navbar;
