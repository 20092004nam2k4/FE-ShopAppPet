import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const tabs = [
    { label: 'Chó', category: 'dog' },
    { label: 'Mèo', category: 'cat' }
];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].category);
    const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
    const [loading, setLoading] = useState(true); // State để hiển thị loading khi chờ dữ liệu

    useEffect(() => {
        // Gọi API để lấy danh sách pet theo category
        setLoading(true);
        axios.get(`http://localhost:8080/api/pets?category=${category.id}`) // API lấy sản phẩm theo danh mục
            .then(response => {
                setProducts(response.data); // Lưu danh sách sản phẩm vào state
                setLoading(false); // Tắt loading
            })
            .catch(error => {
                console.error("There was an error fetching the pets!", error);
                setLoading(false); // Tắt loading ngay cả khi gặp lỗi
            });
    }, [activeTab]); // Gọi API lại mỗi khi activeTab thay đổi

    return (
        <div className="product-list container">
            <div className="tabs-wrapper">
                <div className="tabs">
                    {tabs.map(tab => (
                        <div
                            key={tab.category}
                            className={`tab ${activeTab === tab.category ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.category)}
                        >
                            <span>{tab.label}</span>
                        </div>
                    ))}
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
    );
}

export default ProductList;
