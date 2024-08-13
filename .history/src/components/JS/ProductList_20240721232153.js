// src/components/ProductList.js
import React from 'react';
import './'; // Import các kiểu CSS riêng cho ProductList

const products = [
    {
        id: 1,
        name: 'Dog Food',
        price: '50,000 VND',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Cat Toy',
        price: '30,000 VND',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Bird Cage',
        price: '200,000 VND',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Fish Tank',
        price: '500,000 VND',
        image: 'https://via.placeholder.com/150',
    },
];

const ProductList = () => {
    return (
        <div className="product-list container">
            <h2>Our Products</h2>
            <div className="product-list-inner">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="product-card-body">
                            <h5 className="product-card-title">{product.name}</h5>
                            <p className="product-card-text">{product.price}</p>
                            <button className="product-card-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
