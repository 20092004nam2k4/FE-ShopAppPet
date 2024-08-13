// src/components/Banner.js
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="homepage-hero">
    <div className="container">
      <div className="grid homepage-hero__grid">
        <div className="grid__col homepage-hero__block homepage-hero__block--left">
          <div className="hero-banner__nav">
            <div className="hero-banner__nav-header">
              <p className="hero-banner__nav-title">Hero Banner</p>
            </div>
            <div className="hero-banner__nav-list">
              <ul id="menu-hero-banner" className="hero-banner__menu">
                <li
                  id="menu-item-685"
                  className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-685"
                >
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
                <li
                  id="menu-item-45"
                  className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-45"
                >
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
                <li
                  id="menu-item-14313"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item--icon menu-item--icon-image menu-item-14313"
                >
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
                <li
                  id="menu-item-9132"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item--icon menu-item--icon-image menu-item-9132"
                >
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
                <li
                  id="menu-item-8752"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item--icon menu-item--icon-image menu-item-8752"
                >
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
              </ul>{" "}
            </div>
          </div>
        </div>
        <div className="grid__col homepage-hero__block homepage-hero__block--right">
          <div className="homepage-hero__gallery">
            <div className="grid homepage-hero__grid">
              <div className="grid__col homepage-hero__col homepage-hero__col--large">
                <a className="homepage-hero__link" href="https://azpet.com.vn/">
                  <picture className="image image--cover homepage-hero__image-large">
                    <source
                      srcSet="https://azpet.com.vn/wp-content/uploads/2022/03/azpet-banner-desktop-1-300x175.jpg"
                      sizes="(max-width: 480px) 300w"
                      media="(max-width: 480px)"
                    />
                    <source
                      srcSet="https://azpet.com.vn/wp-content/uploads/2022/03/azpet-banner-desktop-1.jpg"
                      sizes="(max-width: 1024px) 997w"
                      media="(max-width: 1024px)"
                    />
                    <img
                      decoding="async"
                      className="image__img"
                      src="https://azpet.com.vn/wp-content/uploads/2022/03/azpet-banner-desktop-1.jpg"
                      width={997}
                      height={580}
                      alt="azpet banner desktop 1"
                      title="azpet banner desktop 1"
                    />
                  </picture>
                </a>
              </div>
              <div className="grid__col homepage-hero__col homepage-hero__col--small">
                <div className="homepage-hero__row">
                  <a className="homepage-hero__link" href="https://azpet.com.vn/">
                    <picture className="image image--cover homepage-hero__image-small">
                      <source
                        srcSet="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-1-300x171.jpg"
                        sizes="(max-width: 480px) 300w"
                        media="(max-width: 480px)"
                      />
                      <source
                        srcSet="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-1-1024x583.jpg"
                        sizes="(max-width: 1024px) 1024w"
                        media="(max-width: 1024px)"
                      />
                      <img
                        decoding="async"
                        className="image__img"
                        src="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-1.jpg"
                        width={1100}
                        height={626}
                        alt="banner desktop 1"
                        title="banner desktop 1"
                      />
                    </picture>
                  </a>
                </div>
                <div className="homepage-hero__row">
                  <a className="homepage-hero__link" href="https://azpet.com.vn/">
                    <picture className="image image--cover homepage-hero__image-small">
                      <source
                        srcSet="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-2-300x171.jpg"
                        sizes="(max-width: 480px) 300w"
                        media="(max-width: 480px)"
                      />
                      <source
                        srcSet="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-2-1024x583.jpg"
                        sizes="(max-width: 1024px) 1024w"
                        media="(max-width: 1024px)"
                      />
                      <img
                        decoding="async"
                        className="image__img"
                        src="https://azpet.com.vn/wp-content/uploads/2022/03/banner-desktop-2.jpg"
                        width={1100}
                        height={626}
                        alt="banner desktop 2"
                        title="banner desktop 2"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Banner;
