import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const { getCartItemCount } = useCart();
    const itemCount = getCartItemCount();

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo-category-group">
                    <div className="logo">
                        <a href="/">
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
                <div className="searchBox">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Tìm thú cưng của bạn"
                    />
                    <button className="searchButton">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={23}
                            height={23}
                            viewBox="0 0 29 32"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_2_17)">
                                <g filter="url(#filter0_d_2_17)">
                                    <path
                                        d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                                        stroke="white"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        shapeRendering="crispEdges"
                                    />
                                </g>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_2_17"
                                    x="-0.618549"
                                    y="2.70435"
                                    width="29.7139"
                                    height="29.7139"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2_17"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_2_17"
                                        result="shape"
                                    />
                                </filter>
                                <clipPath id="clip0_2_17">
                                    <rect
                                        width="28.0702"
                                        height="28.0702"
                                        fill="white"
                                        transform="translate(0.403503 0.526367)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className="consultation">
                    <div className="cart-icon-container">
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        <div className="cart-text">
                            <span>Giỏ hàng</span>
                            <span className="cart-count">{itemCount} sản phẩm</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
