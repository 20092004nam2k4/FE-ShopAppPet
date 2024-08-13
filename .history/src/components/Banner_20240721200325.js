// src/components/Banner.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <div className="container">
      <div className="grid homepage-hero__grid">
        <div className="grid__col homepage-hero__block homepage-hero__block--left">
          <div className="hero-banner__nav">
            <div className="hero-banner__nav-header">
              <p className="hero-banner__nav-title">Hero Banner</p>
            </div>
            <div className="hero-banner__nav-list">
              <ul id="menu-hero-banner" className="hero-banner__menu">
                <li className="menu-item menu-item--icon">
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
                <li className="menu-item menu-item--icon">
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
                <li className="menu-item menu-item--icon">
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
                <li className="menu-item menu-item--icon">
                  <a href="https://azpet.com.vn/" aria-current="page">
                    <span className="menu-item__icon">
                      <img
                        decoding="async"
                        className="menu-item__image"
                        src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png"
                        alt="phu kien cho meo 1"
                        title="phu kien cho meo 1"
                      />
                    </span>
                    <span className="menu-item__title">Phụ Kiện Chó Mèo</span>
                  </a>
                </li>
                <li className="menu-item menu-item--icon">
                  <a href="https://azpet.com.vn/spa/">
                    <span className="menu-item__icon">
                      <img
                        decoding="async"
                        className="menu-item__image"
                        src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png"
                        alt="spa cho meo 1"
                        title="spa cho meo 1"
                      />
                    </span>
                    <span className="menu-item__title">Spa &amp; Grooming</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid__col homepage-hero__block homepage-hero__block--right">
          <Carousel>
            <Carousel.Item>
              <a href="https://azpet.com.vn/">
                <img
                  className="d-block w-100"
                  src="https://azpet.com.vn/wp-content/uploads/2022/03/azpet-banner-desktop-1.jpg"
                  alt="azpet banner desktop 1"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://azpet.com.vn/">
                <img
                  className="d-block w-100"
                  src="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-1.jpg"
                  alt="banner desktop 1"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://azpet.com.vn/">
                <img
                  className="d-block w-100"
                  src="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-2.jpg"
                  alt="banner desktop 2"
                />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;
