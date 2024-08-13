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
        { name: 'Golden Retriever', image: '../' },
        { name: 'Poodle', image: 'path/to/poodle.jpg' },
        { name: 'Labrador', image: 'path/to/labrador.jpg' }
    ],
    2: [
        { name: 'Pharaoh Hound', image: 'path/to/pharaoh-hound.jpg' },
        { name: 'Azawakh', image: 'path/to/azawakh.jpg' },
        { name: 'Norwegian Lundehund', image: 'path/to/norwegian-lundehund.jpg' }
    ],
    3: [
        { name: 'German Shepherd', image: 'path/to/german-shepherd.jpg' },
        { name: 'Rottweiler', image: 'path/to/rottweiler.jpg' },
        { name: 'Doberman Pinscher', image: 'path/to/doberman-pinscher.jpg' }
    ],
    4: [
        { name: 'Pug', image: 'path/to/pug.jpg' },
        { name: 'Bulldog', image: 'path/to/bulldog.jpg' },
        { name: 'French Bulldog', image: 'path/to/french-bulldog.jpg' }
    ],
    5: [
        { name: 'Mastiff', image: 'path/to/mastiff.jpg' },
        { name: 'Tibetan Mastiff', image: 'path/to/tibetan-mastiff.jpg' },
        { name: 'Neapolitan Mastiff', image: 'path/to/neapolitan-mastiff.jpg' }
    ],
    6: [
        { name: 'English Bulldog', image: 'path/to/english-bulldog.jpg' },
        { name: 'American Bulldog', image: 'path/to/american-bulldog.jpg' },
        { name: 'Olde English Bulldogge', image: 'path/to/olde-english-bulldogge.jpg' }
    ],
    7: [
        { name: 'Beagle', image: 'path/to/beagle.jpg' },
        { name: 'Basset Hound', image: 'path/to/basset-hound.jpg' },
        { name: 'Bloodhound', image: 'path/to/bloodhound.jpg' }
    ],
    8: [
        { name: 'Siberian Husky', image: 'path/to/siberian-husky.jpg' },
        { name: 'Alaskan Malamute', image: 'path/to/alaskan-malamute.jpg' },
        { name: 'Samoyed', image: 'path/to/samoyed.jpg' }
    ],
    9: [
        { name: 'Rhodesian Ridgeback', image: 'path/to/rhodesian-ridgeback.jpg' },
        { name: 'Thai Ridgeback', image: 'path/to/thai-ridgeback.jpg' },
        { name: 'Phu Quoc Ridgeback', image: 'path/to/phu-quoc-ridgeback.jpg' }
    ]
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
