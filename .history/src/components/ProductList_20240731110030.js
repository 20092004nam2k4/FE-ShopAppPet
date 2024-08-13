import React, { useState } from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const products = [
    { name: 'Ngao Neapolitan', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Brazil', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Dogo Argentino', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Pháp Bordeaux', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Tây Tạng', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Ý Cane Corso', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 1', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 2', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 3', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 4', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Ý Cane Corso', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 1', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 2', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 3', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 4', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Ý Cane Corso', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 1', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 2', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 3', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { name: 'Ngao Extra 4', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },

];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div className="product-list container">
            <div className="div-tong">
                <div className="sidebar">
                    <div className="sidebar__top-image">
                        <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png" alt="Top Image" />
                    </div>
                    <h2 className="f aic parent-cat__title">
                        <span
                            className="parent-cat__background"
                            style={{
                                backgroundImage:
                                    'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")'
                            }}
                        />
                        <span className="dark-2 parent-cat__title-text">GIỐNG CHÓ CẢNH</span>
                    </h2>
                    <div className="sidebar__bottom-image">
                        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
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
