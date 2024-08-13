import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
                        <div className="mini-cart-box mini-cart1 aside-box vc_custom_1576244154005">
                            <a
                                className="mini-cart-link bg-color"
                                href="https://matpetfamily.com/gio-hang/"
                            >
                                <span className="mini-cart-icon title30 white">
                                    <i className="icon ion-android-cart" />
                                </span>
                                <span className="mini-cart-text">
                                    <strong className="mini-cart-title white">GIỏ hàng</strong>
                                    <span className="mini-cart-number white set-cart-number">0 </span>{" "}
                                    <span className="white mini-cart-space">sản phẩm -</span>
                                    <span className="mini-cart-total-price set-cart-price white">
                                        <span className="woocommerce-Price-amount amount">
                                            0<span className="woocommerce-Price-currencySymbol">₫</span>
                                        </span>
                                    </span>
                                </span>
                            </a>
                            <div className="mini-cart-content dropdown-list text-left">
                                <h2 className="title18 font-bold play-font">
                                    <span className="set-cart-number">0</span> sản phẩm
                                </h2>
                                <div className="mini-cart-main-content">
                                    <div className="mini-cart-empty">
                                        Không có sản phẩm nào trong giỏ hàng.
                                    </div>
                                </div>
                                <div className="total-default hidden">
                                    <span className="woocommerce-Price-amount amount">
                                        0<span className="woocommerce-Price-currencySymbol">₫</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
