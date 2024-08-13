import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const ProductList = () => {
    return (
        <div className="product-list container">
            <div className="row tong d-flex justify-content-center">
                <div className="col-md-2">
                    {/* Nội dung cho cột bên trái */}
                    <div className="left-column">

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
                </div>
                <div className="col-md-8">
                    {/* Nội dung cho cột bên phải */}
                    <div className="right-column">
                        lksdajfklasdj
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
