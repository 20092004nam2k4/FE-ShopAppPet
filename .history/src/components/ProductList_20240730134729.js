import React, { useState } from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const products = [
    { name: 'Ngao Neapolitan', img: 'https://example.com/ngao-neapolitan.jpg' },
    { name: 'Ngao Brazil', img: 'https://example.com/ngao-brazil.jpg' },
    { name: 'Ngao Dogo Argentino', img: 'https://example.com/ngao-dogo-argentino.jpg' },
    { name: 'Ngao Pháp Bordeaux', img: 'https://example.com/ngao-phap-bordeaux.jpg' },
    { name: 'Ngao Tây Tạng', img: 'https://example.com/ngao-tay-tang.jpg' },
    { name: 'Ngao Ý Cane Corso', img: 'https://example.com/ngao-y-cane-corso.jpg' },
];

function ProductList() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="div-tong">
            <div className="Container">
                <div className="sidebar">
                    <h2>GIỐNG CHÓ CẢNH</h2>
                    <img src="https://example.com/sample-image.jpg" alt="Dogs" />
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
