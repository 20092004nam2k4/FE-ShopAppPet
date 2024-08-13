import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ProductList.css';

const tabs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [startIndex, setStartIndex] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/pets');
                setProducts(response.data.content); 
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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
                                    <span>{tab}</span>
                                </div>
                            ))}
                            <div className="arrow-btns">
                                <button onClick={handlePrev} className="arrow-btn" disabled={startIndex === 0}>
                                    &lt;
                                </button>
                                <button onClick={handleNext} className="arrow-btn" disabled={startIndex + 5 >= tabs.length}>
                                    &gt;
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="product-grid">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            products.map(product => (
                                <div key={product.id} className="product">
                                    <img src={product.imageUrl} alt={product.name} />
                                    <div className="product-name">{product.name}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
