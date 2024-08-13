import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="navbar navbar-expand-lg navbar-red">
                <div className="navbar-content">
                    <div className="logo-group">
                        <a className="navbar-brand" href="#">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
                        </a>
                    </div>
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
                </div>
                <div class="header__widget header__widget--form header__widget--form-product">
                    <div class="dgwt-wcas-search-wrapp dgwt-wcas-has-submit woocommerce dgwt-wcas-style-solaris js-dgwt-wcas-layout-classic dgwt-wcas-layout-classic js-dgwt-wcas-mobile-overlay-enabled">
                        <form class="dgwt-wcas-search-form" role="search" action="https://azpet.com.vn/" method="get">
                            <div class="dgwt-wcas-sf-wrapp">
                                <label class="screen-reader-text" for="dgwt-wcas-search-input-1">Tìm kiếm sản phẩm</label>

                                <input id="dgwt-wcas-search-input-1" type="search" class="dgwt-wcas-search-input" name="s" value="" placeholder="Tìm thú cưng của bạn" autocomplete="off">
                                    <div class="dgwt-wcas-preloader" style="right: 50px;"></div>

                                    <div class="dgwt-wcas-voice-search"></div>

                                    <button type="submit" aria-label="Tìm kiếm" class="dgwt-wcas-search-submit">				<svg class="dgwt-wcas-ico-magnifier" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.539 51.361" xml:space="preserve">
                                        <path d="M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z"></path>
                                    </svg>
                                    </button>

                                    <input type="hidden" name="post_type" value="product">
                                        <input type="hidden" name="dgwt_wcas" value="1">


                                        
                                    </form>
                            </div>
                    </div>
                </div>
            </div>
            );
};

            export default Navbar;
