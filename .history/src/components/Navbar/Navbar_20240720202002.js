/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="header__sticky js-sticky-header">
        <div className="header__inner">
          <div className="header__wrapper">
            <div className="container header__container">
              <div className="grid header__grid">
                <div className="grid__col header__col header__col--left-mobile">
                  <img 
                    src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/header-free-ship.png" 
                    alt="Free ship" 
                    width="100" 
                    height="20"
                  />
                </div>
                <div className="grid__col header__col header__col--logo-menu">
                  <div className="f fw header__logo-menu js-header-logo">
                    <div className="header__logo">
                      <span className="screen-reader-text">AZPET – An Tâm Mua Pet</span>
                      <a 
                        href="https://azpet.com.vn/" 
                        className="custom-logo-link" 
                        rel="home" 
                        aria-current="page"
                      >
                        <img 
                          width="300" 
                          height="163" 
                          src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" 
                          className="custom-logo" 
                          alt="logo azpet" 
                          decoding="async" 
                          srcSet="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp 300w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-20x11.png 20w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-64x35.png 64w" 
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                      </a>
                    </div>
                    <div className="header__vertical js-header-vertical">
                      <button className="f header__vertical-header js-header-vertical-button">
                        <span className="header__icon header__icon--vertical header__icon--icon-menu">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                            <path d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path>
                          </svg>
                        </span>
                        <span className="header__icon header__icon--vertical header__icon--icon-close">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                            <path d="M36.2,32,56,12.2a1.93,1.93,0,0,0,0-2.8L54.6,8a1.93,1.93,0,0,0-2.8,0L32,27.8,12.2,8A1.93,1.93,0,0,0,9.4,8L8,9.4a1.93,1.93,0,0,0,0,2.8L27.8,32,8,51.8a1.93,1.93,0,0,0,0,2.8L9.4,56a1.93,1.93,0,0,0,2.8,0L32,36.2,51.8,56a1.93,1.93,0,0,0,2.8,0L56,54.6a1.93,1.93,0,0,0,0-2.8Z"></path>
                          </svg>
                        </span>
                        <span className="header__vertical-title">Danh mục sản phẩm</span>
                      </button>
                      <div className="header__vertical-list js-header-vertical-content is-not-loaded">
                        <noscript>
                          <ul id="menu-danh-muc-san-pham" className="header__vertical_menu">
                            <li id="menu-item-687" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-687">
                              <a href="https://azpet.com.vn/cho-canh/">
                                <span className="menu-item__icon">
                                  <img className="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt="" />
                                </span>
                                <span className="menu-item__title">Giống Chó Cảnh</span>
                              </a>
                            </li>
                            <li id="menu-item-18" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-18">
                              <a href="https://azpet.com.vn/meo-canh/">
                                <span className="menu-item__icon">
                                  <img className="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png" alt="" />
                                </span>
                                <span className="menu-item__title">Giống Mèo Cảnh</span>
                              </a>
                            </li>
                            <li id="menu-item-9131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item--icon menu-item--icon-image menu-item-9131">
                              <a href="https://azpet.com.vn/" aria-current="page">
                                <span className="menu-item__icon">
                                  <img className="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png" alt="" />
                                </span>
                                <span className="menu-item__title">Phụ Kiện Chó Mèo</span>
                              </a>
                            </li>
                            <li id="menu-item-8751" className="menu-item menu-item-type-post_type menu-item-object-page menu-item--icon menu-item--icon-image menu-item-8751">
                              <a href="https://azpet.com.vn/spa/">
                                <span className="menu-item__icon">
                                  <img className="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png" alt="" />
                                </span>
                                <span className="menu-item__title">Spa &#038; Grooming</span>
                              </a>
                            </li>
                            <li id="menu-item-14312" className="menu-item menu-item-type-custom menu-item-object-custom menu-item--icon menu-item--icon-image menu-item-14312">
                              <a target="_blank" rel="noopener" href="https://hoptac.azpet.com.vn/">
                                <span className="menu-item__icon">
                                  <img className="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png" alt="" />
                                </span>
                                <span className="menu-item__title">Hợp tác nhân giống</span>
                              </a>
                            </li>
                          </ul>
                        </noscript>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid__col header__col header__col--mobile-menu-buttons">
                  <div className="f aic header__mobile-menu-buttons">
                    <button className="f header__mobile-menu-button js-header-mobile-menu-button">
                      <span className="header__icon header__icon--mobile-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                          <path d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="header__right">
                <div className="header__contact">
                  <span className="header__contact-title">Liên hệ</span>
                  <div className="header__contact-info">
                    <a href="tel:0968884282" className="header__contact-phone">
                      <span className="header__contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                          <path d="M61.5,43.5a7.78,7.78,0,0,0-3.8-4.3L45.2,34.5a5.1,5.1,0,0,0-6.1.7l-3.5,3.5a3.2,3.2,0,0,0-1.1.6,3.8,3.8,0,0,0-1.5,1.6c-.2.4-.5.9-.8,1.2-2.1,2.1-4.7,2.6-6.9,1.5-1.1-.6-2.1-1.5-3.1-2.4a7.7,7.7,0,0,0-2.6-1.4A3.6,3.6,0,0,0,15.7,39a3.8,3.8,0,0,0-1.5,1.6c-.2.4-.5.9-.8,1.2a11.8,11.8,0,0,0-2.2,6.7,8.2,8.2,0,0,0,.3,1.9A20.6,20.6,0,0,0,14.1,57c8.5,6.2,16.9,10.4,25.7,10.4,3.1,0,5.8-2.4,5.8-5.3v-3.7c0-3.1-2.4-5.8-5.5-5.8-8.8,0-15.2-4.5-18.5-7.3-.7-1.1-.9-2.3-1.1-3.5-.1-2.6-.1-5.2.1-7.8,1.8-10.8,14.3-8.7,17.5-6.2a8.4,8.4,0,0,0,1.8,2.4c1.5,1.2,2.9,2.5,4.4,3.7,3.1,2.5,8.2,3.5,10.9,1.6,1.8-1.1,3.2-3,4.6-4.7s2.1-3.6,3-5.4a4.4,4.4,0,0,0,.2-2.3c.1-1.8,0-3.7-1.1-5.2A8.8,8.8,0,0,0,61.5,43.5ZM40.4,55.6c-2.4,1.9-5.1,2.4-8.3,1.5a10.9,10.9,0,0,1-3.9-2.4,19.1,19.1,0,0,1-2.1-2.3,18.5,18.5,0,0,1-2.2-2.5c-1.7-2.2-3.7-4.3-5.5-6.5-3.4-3.2-6.8-5.7-8.8-5.7a2.7,2.7,0,0,0-1.7.5c-2.6,1.5-4.9,3.2-6.6,5.3-1.1,1.2-1.8,2.7-1.9,4.3v.4a9.1,9.1,0,0,0,5.8,8.2c1.8.8,3.6,1.4,5.5,1.6,3.7.3,7.4-.4,10.8-2.3a12.8,12.8,0,0,0,2.3-1.4c.8-.6,1.4-1.3,2.1-2,.9-1.4,1.5-2.8,1.9-4.3a1.5,1.5,0,0,0-.2-.8c-.3-.5-.7-1-1.1-1.4a9.4,9.4,0,0,0-2.4-1.8A4.2,4.2,0,0,0,40.4,55.6Z"></path>
                        </svg>
                      </span>
                      0968884282
                    </a>
                  </div>
                </div>
                <div className="header__search">
                  <button className="header__search-button js-header-search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                      <path d="M26.9,46.8a20.5,20.5,0,1,1,20.5-20.5A20.5,20.5,0,0,1,26.9,46.8Zm0-37a16.5,16.5,0,1,0,16.5,16.5A16.5,16.5,0,0,0,26.9,9.8Zm.4,23.4a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm9.3,3.4a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm-17,4.8a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm0-7.3a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0"></path>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                        <path d="M26.9,46.8a20.5,20.5,0,1,1,20.5-20.5A20.5,20.5,0,0,1,26.9,46.8Zm0-37a16.5,16.5,0,1,0,16.5,16.5A16.5,16.5,0,0,0,26.9,9.8Zm.4,23.4a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm9.3,3.4a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm-17,4.8a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm0-7.3a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Zm-9.3,5.8a1.2,1.2,0,0,0-1.2,1.2v.4a1.2,1.2,0,0,0,1.2,1.2h8.2a1.2,1.2,0,0,0,1.2-1.2v-.4a1.2,1.2,0,0,0-1.2-1.2Z"></path>
                      </svg>
                    </svg>
                    </button>
                    
                    </span>
                  </button>
                </div>
                <div className="header__cart">
                  <a href="/cart" className="header__cart-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                      <path d="M22,6a2,2,0,0,0-2,2V8a2,2,0,0,0,2-2V6Zm0,6a2,2,0,0,0-2,2V14a2,2,0,0,0,2-2V12Zm12,0a2,2,0,0,0-2,2V14a2,2,0,0,0,2-2V12Zm12,0a2,2,0,0,0-2,2V14a2,2,0,0,0,2-2V12Zm-7.5,12.1a6.6,6.6,0,0,0-3.1.8L34,26a4.6,4.6,0,0,0-3.2.6l-2.6,1.8L18.6,22.8,4.5,32.7a4.8,4.8,0,0,0-1.4,5.5L3.3,43.5a6.5,6.5,0,0,0,.4,1.8,7.2,7.2,0,0,0,6.8,4.7h38.8a7.2,7.2,0,0,0,6.8-4.7,6.6,6.6,0,0,0,.4-1.8L60.4,38a4.8,4.8,0,0,0-1.4-5.5L48.8,22.8l-5.6-3.8L38.6,28.6a4.6,4.6,0,0,0-3.2-.6l-3.6,2.5a6.6,6.6,0,0,0-3.1-.8Zm-11.8,5.8h12.7l1.6-8.3H25.7l1.6,8.3ZM42.2,41a3.2,3.2,0,0,1-3.2,3.2H18.4a3.2,3.2,0,0,1-3.2-3.2v-.4a3.2,3.2,0,0,1,3.2-3.2H39a3.2,3.2,0,0,1,3.2,3.2v.4Z"></path>
                    </svg>
                    <span className="header__cart-count">0</span>
                  </a>
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
