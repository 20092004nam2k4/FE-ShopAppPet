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
    1: [
        { name: 'Golden Retriever', image: '../assets/images/pet1.jpg' },
        { name: 'Poodle', image: '../assets/images/pet1.jpg' },
        { name: 'Labrador', image: '../assets/images/pet1.jpg' }
    ],
    2: [
        { name: 'Pharaoh Hound', image: '../assets/images/pet1.jpg' },
        { name: 'Azawakh', image: '../assets/images/pet1.jpg' },
        { name: 'Norwegian Lundehund', image: '../assets/images/pet1.jpg' }
    ],
    3: [
        { name: 'German Shepherd', image: '../assets/images/pet1.jpg' },
        { name: 'Rottweiler', image: '../assets/images/pet1.jpg' },
        { name: 'Doberman Pinscher', image: '../assets/images/pet1.jpg' }
    ],
    4: [
        { name: 'Pug', image: '../assets/images/pet1.jpg' },
        { name: 'Bulldog', image: '../assets/images/pet1.jpg' },
        { name: 'French Bulldog', image: '../assets/images/pet1.jpg' }
    ],
    5: [
        { name: 'Mastiff', image: '../assets/images/pet1.jpg' },
        { name: 'Tibetan Mastiff', image: '../assets/images/pet1.jpg' },
        { name: 'Neapolitan Mastiff', image: '../assets/images/pet1.jpg' }
    ],
    6: [
        { name: 'English Bulldog', image: '../assets/images/pet1.jpg' },
        { name: 'American Bulldog', image: '../assets/images/pet1.jpg' },
        { name: 'Olde English Bulldogge', image: '../assets/images/pet1.jpg' }
    ],
    7: [
        { name: 'Beagle', image: '../assets/images/pet1.jpg' },
        { name: 'Basset Hound', image: '../assets/images/pet1.jpg' },
        { name: 'Bloodhound', image: '../assets/images/pet1.jpg' }
    ],
    8: [
        { name: 'Siberian Husky', image: '../assets/images/pet1.jpg' },
        { name: 'Alaskan Malamute', image: '../assets/images/pet1.jpg' },
        { name: 'Samoyed', image: '../assets/images/pet1.jpg' }
    ],
    9: [
        { name: 'Rhodesian Ridgeback', image: '../assets/images/pet1.jpg' },
        { name: 'Thai Ridgeback', image: '../assets/images/pet1.jpg' },
        { name: 'Phu Quoc Ridgeback', image: '../assets/images/pet1.jpg' }
    ]
};

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);

    return (
        <div className="product-list container">
            <div className="flickity-slider">
                {categories.map((category, index) => (
                    <button
                        key={category.id}
                        className={`d-inline-block parent-cat__nav-item ${selectedCategory === category.id ? 'is-active is-selected' : ''}`}
                        role="tab"
                        aria-selected={selectedCategory === category.id}
                        style={{ transform: `translateX(${181 * index}px)` }}
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
