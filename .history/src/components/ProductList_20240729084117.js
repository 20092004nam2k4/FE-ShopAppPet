import React, { useState } from 'react';
import './CSS/ProductList.css';

const categories = [
    { id: 1, name: 'Phổ biến nhất' },
    { id: 2, name: 'Độc Hiếm' },
    { id: 3, name: 'Chó Bảo Vệ' },
    { id: 4, name: 'Chó Mặt Xệ' },
    { id: 5, name: 'Chó Ngao' },
    { id: 6, name: 'Chó Bull' },
    { id: 7, name: 'Chó Săn' },
    { id: 8, name: 'Chó Kéo Xe' },
    { id: 9, name: 'Chó Xoáy' }
];

const sampleProducts = {
    1: [ /* Array of products for 'Phổ biến nhất' */ ],
    2: [ /* Array of products for 'Độc Hiếm' */ ],
    3: [ /* Array of products for 'Chó Bảo Vệ' */ ],
    4: [ /* Array of products for 'Chó Mặt Xệ' */ ],
    5: [ /* Array of products for 'Chó Ngao' */ ],
    6: [ /* Array of products for 'Chó Bull' */ ],
    7: [ /* Array of products for 'Chó Săn' */ ],
    8: [ /* Array of products for 'Chó Kéo Xe' */ ],
    9: [ /* Array of products for 'Chó Xoáy' */ ]
};

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);

    return (
        <div className="product-list container">
            <div className="flickity-slider" style={{ left: 0, transform: "translateX(0px)" }}>
                {categories.map((category, index) => (
                    <button
                        key={category.id}
                        className={`d-inline-block parent-cat__nav-item ${selectedCategory === category.id ? 'is-active is-selected' : ''}`}
                        role="tab"
                        aria-selected={selectedCategory === category.id}
                        style={{ position: "absolute", left: 0, transform: `translateX(${181 * index}px)` }}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <span className="parent-cat__nav-link">{category.name}</span>
                    </button>
                ))}
            </div>

            <div className="image-list">
                {sampleProducts[selectedCategory].map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
