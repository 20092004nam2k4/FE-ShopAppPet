// src/components/Banner.js
import React from 'react';
import './Banner.css'; // Đảm bảo đường dẫn đúng
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap CSS

function Banner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="hero-banner__nav">
            <div className="hero-banner__nav-header">
              <p className="hero-banner__nav-title">Hero Banner</p>
            </div>
            <div className="hero-banner__nav-list">
              <ul id="menu-hero-banner" className="hero-banner__menu">
                <li id="menu-item-685" className="menu-item menu-item--icon">
                  <a href="https://azpet.com.vn/cho-canh/">
                    <span className="menu-item__icon">
                      <img
                        decoding="async"
                        className="menu-item__image"
                        src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png"
                        alt="cho canh 1"
                        title="cho canh 1"
                      />
                    </span>
                    <span className="menu-item__title">Giống Chó Cảnh</span>
                  </a>
                </li>
                {/* Các mục khác */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero-banner__nav">
            <div className="hero-banner__nav-header">
              <p className="hero-banner__nav-title">Hero Banner</p>
            </div>
            <div className="hero-banner__nav-list">
              <ul id="menu-hero-banner" className="hero-banner__menu">
                <li id="menu-item-45" className="menu-item menu-item--icon">
                  <a href="https://azpet.com.vn/meo-canh/">
                    <span className="menu-item__icon">
                      <img
                        decoding="async"
                        className="menu-item__image"
                        src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png"
                        alt="meo canh 1"
                        title="meo canh 1"
                      />
                    </span>
                    <span className="menu-item__title">Giống Mèo Cảnh</span>
                  </a>
                </li>
                {/* Các mục khác */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero-banner__nav">
            <div className="hero-banner__nav-header">
              <p className="hero-banner__nav-title">Hero Banner</p>
            </div>
            <div className="hero-banner__nav-list">
              <ul id="menu-hero-banner" className="hero-banner__menu">
                <li id="menu-item-14313" className="menu-item menu-item--icon">
                  <a href="https://hoptac.azpet.com.vn/">
                    <span className="menu-item__icon">
                      <img
                        decoding="async"
                        className="menu-item__image"
                        src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png"
                        alt="hop tac nhan giong cho canh 1"
                        title="hop tac nhan giong cho canh 1"
                      />
                    </span>
                    <span className="menu-item__title">Hợp Tác Nhân Giống</span>
                  </a>
                </li>
                {/* Các mục khác */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
