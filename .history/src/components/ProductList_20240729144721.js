import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList


const ProductList = () => {
    return (
        <div className="product-list container">
    <div className="mb-1 parent-cat__header">
        <h2 className="f aic parent-cat__title">
          <span
            className="parent-cat__background"
            style={{
              backgroundImage:
                'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")'
            }}
          />
          <span className="dark-2 parent-cat__title-text">Giống Chó Cảnh</span>
        </h2>
        <div className="parent-cat__image-wrapper">
          <img
            decoding="async"
            width={730}
            height={1459}
            src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg"
            className="parent-cat__image"
            alt="azpet banner chó cảnh desktop"
            srcSet="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg 730w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-300x600.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-512x1024.jpg 512w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-10x20.jpg 10w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-375x749.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-64x128.jpg 64w"
            sizes="(max-width: 730px) 100vw, 730px"
            title="azpet banner cho canh desktop"
          />{" "}
        </div>
      </div>
      <div className="parent-cat__main">
        <div className="f aic jcc parent-cat__nav">
          <div
            className="list-reset parent-cat__nav-list js-nav-list flickity-enabled is-draggable is-initialized"
            role="tablist"
            data-carousel='{"prevNextButtons":false}'
            tabIndex={0}
          >
            <div
              className="flickity-viewport"
              style={{ height: "46.65px", touchAction: "pan-y" }}
            >
              <div
                className="flickity-slider"
                style={{ left: 0, transform: "translateX(0px)" }}
              >
                <button
                  className="d-inline-block parent-cat__nav-item is-active is-selected"
                  role="tab"
                  aria-selected="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(0px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Phổ biến nhất</span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(181px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Độc Hiếm</span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(362px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Bảo Vệ</span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(542px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Mặt Xệ </span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(723px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Ngao</span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(904px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Bull</span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(1085px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Săn</span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(1266px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Kéo Xe </span>
                </button>
                <button
                  className="d-inline-block parent-cat__nav-item"
                  role="tab"
                  aria-selected="false"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(1446px)"
                  }}
                >
                  <span className="parent-cat__nav-link">Chó Xoáy</span>
                </button>
              </div>
            </div>
            <ol className="flickity-page-dots">
              <li
                className="dot is-selected"
                aria-label="Page dot 1"
                aria-current="step"
              />
              <li className="dot" aria-label="Page dot 2" />
              <li className="dot" aria-label="Page dot 3" />
              <li className="dot" aria-label="Page dot 4" />
              <li className="dot" aria-label="Page dot 5" />
              <li className="dot" aria-label="Page dot 6" />
              <li className="dot" aria-label="Page dot 7" />
              <li className="dot" aria-label="Page dot 8" />
              <li className="dot" aria-label="Page dot 9" />
            </ol>
          </div>
        </div>
    );
}

export default ProductList;
