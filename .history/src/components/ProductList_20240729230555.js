import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const ProductList = () => {
    return (
        <div className="product-list container">
            <div className="row mb-1 parent-cat__header">
                <div className="col-md-2">
                    <div className="parent-cat__image-wrapper">
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
                        />

                    </div>
                </div>
                <div className="col-md-9">
                    <div className="parent-cat__main">
                        <div className="f aic jcc parent-cat__nav">
                            <div
                                className="list-reset parent-cat__nav-list js-nav-list"
                                role="tablist"
                            >
                                <button
                                    className="d-inline-block parent-cat__nav-item is-active"
                                    role="tab"
                                    aria-selected="true"
                                >
                                    <span className="parent-cat__nav-link">Phổ biến nhất</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Độc Hiếm</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Bảo Vệ</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Mặt Xệ</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Ngao</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Bull</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Săn</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Kéo Xe</span>
                                </button>
                                <button
                                    className="d-inline-block parent-cat__nav-item"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    <span className="parent-cat__nav-link">Chó Xoáy</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
