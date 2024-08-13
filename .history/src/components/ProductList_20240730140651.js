import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const ProductList = () => {
    return (
        <div className="product-list container">
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
