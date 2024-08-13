import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-red">
            <div className="navbar-left">
                <div className="logo-category-group">
                    <a className="navbar-brand" href="#">
                        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
                    </a>
                    <a className="category-link" href="#">
                        <img src="category-icon.png" alt="Product Categories" className="category-icon" />
                    </a>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-content">
                    <form className="form-inline">
                        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <button className="btn consult-btn">Consultation</button>
                    <div className="image-container">
                        <img src="image1.jpg" alt="Advisor" className="circle-img" />
                        <img src="image2.jpg" alt="Advisor" className="circle-img" />
                        <img src="image3.jpg" alt="Advisor" className="circle-img" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
