import React, { useState } from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

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
];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex + 5 < tabs.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

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
                    <div className="tabs-wrapper">
                        <div className="tabs">
                            {tabs.slice(startIndex, startIndex + 5).map(tab => (
                                <div
                                    key={tab}
                                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </div>
                            ))}
                            /* CSS cho ProductList */
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.container {
  display: flex;
  width: 82%;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 30px;
  border-radius: 5px;
  margin-bottom: 40px;
}

.div-tong {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-left: -20px;
  margin-bottom: -17px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 46%;
  color: white;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}

.sidebar__top-image img {
  width: 100%;
  height: auto;
  margin-bottom: -7px;
}

.sidebar__bottom-image {
  flex-grow: 1; /* Chiếm hết phần còn lại */
  display: flex;
  align-items: flex-end;
}

.sidebar__bottom-image img {
  width: 100%;
  height: auto;
  border-radius: 3px;
}

.parent-cat__title {
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: -10px;
  font-size: 25px; /* Make the header smaller */
  background-color: #b90000;
  text-transform: uppercase;
}

.content {
  flex-grow: 1;
}

.tabs {
  display: flex;
  border-bottom: 2px solid #ccc;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap; /* Ensure tabs are in one line */
}

.tab.active {
  border-bottom: 2px solid red;
  font-weight: bold;
  color: #ff0000;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Display 5 images per row */
  gap: 20px;
  margin-top: 20px;
  max-height: 400px; /* Set max-height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
}

.product-grid img {
  width: 100%;
  border-radius: 10px;
}

.product-grid .product {
  text-align: center;
}

                        </div>

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
