import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [startIndex, setStartIndex] = useState(0);
    const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
    const [loading, setLoading] = useState(true); // State để hiển thị loading khi chờ dữ liệu

    useEffect(() => {
        // Gọi API để lấy danh sách pet
        axios.get('http://localhost:8080/api/pets') // Cập nhật địa chỉ API nếu cần
            .then(response => {
                setProducts(response.data.content); // Lưu danh sách sản phẩm vào state
                setLoading(false); // Tắt loading
            })
            .catch(error => {
                console.error("There was an error fetching the pets!", error);
                setLoading(false); // Tắt loading ngay cả khi gặp lỗi
            });
    }, []); // Chỉ gọi API khi component được tải lần đầu

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
                            <p>Loading...</p> // Hiển thị khi dữ liệu đang được tải
                        ) : (
                            products.map((pet) => (
                                <div key={pet.id} className="product">
                                    <img src={"http://localhost:8080/image/" + pet.image} alt={pet.name} />
                                    <p>{pet.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
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
                            <p>Loading...</p> // Hiển thị khi dữ liệu đang được tải
                        ) : (
                            products.map((pet) => (
                                <div key={pet.id} className="product">
                                    <img src={"http://localhost:8080/image/" + pet.image} alt={pet.name} />
                                    <p>{pet.name}</p>
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
