import React, { useState } from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const products = [
    { name: 'Ngao Neapolitan', img: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
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
            <div className="div-tong">
                <div className="sidebar">
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

                    <div>
                        <img src="https://example.com/sample-image.jpg" alt="Dogs" />
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
