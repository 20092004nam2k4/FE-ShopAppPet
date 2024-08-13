import React, { useState } from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const products = [
    { name: 'Ngao Neapolitan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dY0Wwx6nLz5MomRTm3PICE1SpusfbK2B5g&s' },
    { name: 'Ngao Brazil', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dY0Wwx6nLz5MomRTm3PICE1SpusfbK2B5g&s' },
    { name: 'Ngao Dogo Argentino', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dY0Wwx6nLz5MomRTm3PICE1SpusfbK2B5g&s' },
    { name: 'Ngao Pháp Bordeaux', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dY0Wwx6nLz5MomRTm3PICE1SpusfbK2B5g&s' },
    { name: 'Ngao Tây Tạng', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dY0Wwx6nLz5MomRTm3PICE1SpusfbK2B5g&s' },
    { name: 'Ngao Ý Cane Corso', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dY0Wwx6nLz5MomRTm3PICE1SpusfbK2B5g&s' },
];
const ProductList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div className="product-list container">
            <div className="Container">
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

                <div className="content">
                    <div className="tabs">
                        {tabs.map(tab => (
                            <div
                                key={tab}
                                className={`tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    <div className="product-grid">
                        {products.map(product => (
                            <div key={product.name} className="product">
                                <img src={product.img} alt={product.name} />
                                <div>{product.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
